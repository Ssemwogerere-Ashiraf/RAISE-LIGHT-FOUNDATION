// Add interactive features here, such as smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});
});

// Handle donation modal
const donationForm = document.querySelector('form');
const donationModal = document.getElementById('donation-modal');
const closeModal = document.querySelector('.close');

if (donationForm) {
  donationForm.addEventListener('submit', function (e) {
    e.preventDefault();
    donationModal.style.display = 'flex';
  });
}

if (closeModal) {
  closeModal.addEventListener('click', function () {
    donationModal.style.display = 'none';
});
}

// Fade-in sections on scroll
const fadeIns = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);

fadeIns.forEach(section => {
  observer.observe(section);
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert('All fields are required.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.preventDefault();
      alert('Please enter a valid email address.');
    }
});
}

// Dynamic Event Calendar
const calendar = document.getElementById('calendar');
const events = [
  { date: '2025-03-15', title: 'Annual Fundraiser Gala' },
  { date: '2025-04-10', title: 'Community Outreach Program' },
];

if (calendar) {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();

  for (let day = 1; day <= 31; day++) {
    const date = new Date(year, month, day);
    if (date.getMonth() !== month) break;

    const dayDiv = document.createElement('div');
    dayDiv.textContent = day;

    const event = events.find(e => e.date === $ {year} -$ {String (month + 1).padStart(2, '0')} -$ {String(day).padStart(2, '0')});
    if (event) {
      dayDiv.classList.add('event');
      dayDiv.title = event.title;
    }

    calendar.appendChild(dayDiv);
}


