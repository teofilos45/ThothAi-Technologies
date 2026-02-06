export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (url.pathname === "/chat" && request.method === "POST") {
      if (!env.GEMINI_API_KEY) {
        return new Response("Missing GEMINI_API_KEY", { status: 500, headers: corsHeaders });
      }

      let payload;
      try {
        payload = await request.json();
      } catch {
        return new Response("Invalid JSON", { status: 400, headers: corsHeaders });
      }

      const userMessage = (payload && payload.message ? String(payload.message) : "").trim();
      const history = Array.isArray(payload?.history) ? payload.history : [];

      if (!userMessage) {
        return new Response("Message required", { status: 400, headers: corsHeaders });
      }

      const systemInstruction = "You are Thoth's website assistant. Answer clearly and briefly. If the user asks for human support or anything you are unsure about, suggest a WhatsApp handoff.";
      
      // Build Gemini contents array (conversation history)
      const contents = [];
      
      // Add history
      for (const msg of history.slice(-8)) {
        contents.push({
          role: msg.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: String(msg.content || "") }]
        });
      }
      
      // Add current user message
      contents.push({
        role: 'user',
        parts: [{ text: userMessage }]
      });

      // Call Gemini API (non-streaming)
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${env.GEMINI_API_KEY}`;
      
      try {
        const geminiRes = await fetch(geminiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            system_instruction: {
              parts: [{ text: systemInstruction }]
            },
            contents: contents,
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 1024,
            }
          }),
        });

        if (!geminiRes.ok) {
          const errText = await geminiRes.text();
          return new Response(errText || "Gemini API error", { status: geminiRes.status, headers: corsHeaders });
        }

        const json = await geminiRes.json();
        const text = json?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!text) {
          return new Response(JSON.stringify({ error: "No response from AI" }), { 
            status: 500, 
            headers: { ...corsHeaders, "Content-Type": "application/json" } 
          });
        }

        // Return simple JSON response
        return new Response(JSON.stringify({ message: text }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });

      } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }
    }

    if (url.pathname === "/health") {
      return new Response("ok", { status: 200, headers: corsHeaders });
    }

    return new Response("Not found", { status: 404, headers: corsHeaders });
  },
};