// Fade-in elements on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target); // animate only once
      }
    });
  },
  {
    threshold: 0.1
  }
);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  section.classList.add('hidden'); // start hidden
  observer.observe(section);
});
