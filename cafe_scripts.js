document.getElementById('menu-link').addEventListener('focus', showMenu);
document.getElementById('exit').addEventListener('focus', hideMenu);

function showMenu() {
  document.getElementById('menu').style.visibility = 'visible';
}

function hideMenu() {
  document.getElementById('menu').style.visibility = 'hidden';
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName('slides');
  var dots = document.getElementsByClassName('dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += ' active';
  setTimeout(showSlides, 3000);
}
