// HERO TEXT FADE SLIDER - MUST BE AT TOP TO INITIALIZE FIRST
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;
const SLIDE_INTERVAL = 7000; // 7s

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });

  currentSlide = index;
}

// Auto slide
let slideTimer = setInterval(() => {
  const next = (currentSlide + 1) % slides.length;
  showSlide(next);
}, SLIDE_INTERVAL);

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    clearInterval(slideTimer); // Clear the auto-slide when user clicks
    showSlide(index);
    // Restart auto-slide after user interaction
    slideTimer = setInterval(() => {
      const next = (currentSlide + 1) % slides.length;
      showSlide(next);
    }, SLIDE_INTERVAL);
  });
});

// Staggered animations on scroll with Intersection Observer
if ('IntersectionObserver' in window) {
  const staggerObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add visible class to trigger animations
          entry.target.classList.add('animate-in');
          staggerObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe all elements with stagger animations
  const staggerElements = document.querySelectorAll(
    '.about-mission, .about-impact, .impact-item, .flow-step, .accordion-item, .contact-info, .contact-form-section'
  );
  
  staggerElements.forEach(el => staggerObserver.observe(el));
}

// Active navigation link tracking
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

// Fade-in animation for service cards on scroll
const cards = document.querySelectorAll('.services .card');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry); // animate once
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach(card => observer.observe(card));
} else {
  // Fallback for older browsers
  cards.forEach(card => card.classList.add('show'));
}

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav');

if (menuToggle && navMenu) {
  // Toggle menu on hamburger click
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Close menu when any nav link is clicked
  const navLinksMenu = navMenu.querySelectorAll('a');
  navLinksMenu.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}

// Trigger stagger animation for Services cards on scroll
function revealServices() {
  const cards = document.querySelectorAll('.services .card');
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealServices);
window.addEventListener('load', revealServices);

// Rotating Testimonials with Avatars
const testimonials = [
  { text: '"ThothAi transformed our workflow—responses are instant and we now capture more leads than ever!"', author: 'Ashley, CEO of LocalBiz', photo: 'https://i.pravatar.cc/150?img=49' },
  { text: '"The AI automation saved our team hours daily and allowed us to focus on growth."', author: 'Brad, Founder of TechSolutions', photo: 'https://i.pravatar.cc/150?img=14' },
  { text: '"Amazing results! Customer engagement has never been smoother or faster."', author: 'Grace, Marketing Director', photo: 'https://i.pravatar.cc/150?img=47' }
];

let currentTestimonial = 0;
const testimonialTextEl = document.querySelector('.testimonial-text');
const testimonialAuthorEl = document.querySelector('.testimonial-author');
const testimonialAvatarEl = document.querySelector('.testimonial-avatar');

// Initialize first testimonial
if (testimonialTextEl && testimonialAuthorEl && testimonialAvatarEl) {
  testimonialTextEl.textContent = testimonials[0].text;
  testimonialAuthorEl.textContent = '— ' + testimonials[0].author;
  testimonialAvatarEl.src = testimonials[0].photo;
  testimonialAvatarEl.alt = testimonials[0].author;

  function rotateTestimonial() {
    // Fade out
    testimonialTextEl.style.opacity = 0;
    testimonialAuthorEl.style.opacity = 0;
    testimonialAvatarEl.style.opacity = 0;

    setTimeout(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      testimonialTextEl.textContent = testimonials[currentTestimonial].text;
      testimonialAuthorEl.textContent = '— ' + testimonials[currentTestimonial].author;
      testimonialAvatarEl.src = testimonials[currentTestimonial].photo;
      testimonialAvatarEl.alt = testimonials[currentTestimonial].author;

      // Fade in
      testimonialTextEl.style.transition = 'opacity 0.5s';
      testimonialAuthorEl.style.transition = 'opacity 0.5s';
      testimonialAvatarEl.style.transition = 'opacity 0.5s';
      testimonialTextEl.style.opacity = 1;
      testimonialAuthorEl.style.opacity = 1;
      testimonialAvatarEl.style.opacity = 1;
    }, 500); // wait for fade out to finish
  }

  // Rotate every 6 seconds
  setInterval(rotateTestimonial, 6000);
}

// FAQ Accordion
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const accordionItem = button.parentElement;
    const isActive = accordionItem.classList.contains('active');

    // Close all accordion items
    document.querySelectorAll('.accordion-item').forEach(item => {
      item.classList.remove('active');
    });

    // Open the clicked item if it wasn't already open
    if (!isActive) {
      accordionItem.classList.add('active');
    }
  });
});

// WhatsApp Form Integration
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const business = document.getElementById('business').value;
    const message = document.getElementById('message').value;

    // Format the message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0ABusiness: ${encodeURIComponent(business)}%0AMessage: ${encodeURIComponent(message)}`;

    // WhatsApp number
    const whatsappPhone = '233533769658';
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${whatsappMessage}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappUrl, '_blank');

    // Reset form
    contactForm.reset();
  });
}