function showSection(id) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
  }
}

window.onload = () => showSection('about');