const navbar = document.getElementById('navbar');

navbar.addEventListener('click', function (e) {
  if (e.target.classList.contains('toggle')) {
    e.target.classList.toggle('active');
    e.target.previousElementSibling.classList.toggle('active');
  }
});