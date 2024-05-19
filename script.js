const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', function() {
  navMenu.classList.toggle('show');
});


const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));
    const offset = 60; 

    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: 'smooth'
    });

    
    navMenu.classList.remove('show');
  });
});