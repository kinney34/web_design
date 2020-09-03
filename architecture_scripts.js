document.getElementById('menu-button').addEventListener('click', toggleMenuButton);
window.onscroll = function() {hideTitle()};

function hideTitle() {
  if (document.body.scrollTop > 125 || document.documentElement.scrollTop > 125) {
    document.getElementById('title').className = 'scrolling-down';
  } else {
    document.getElementById('title').className = '';
  }
}

function toggleMenuButton() {
  document.getElementById('menu-button').classList.toggle('exit');
  toggleNavBar();
}

function toggleNavBar() {
  var menu_button = document.getElementById('menu-button');
  var navBar = document.getElementById('navBar');
  if (menu_button.classList.contains('exit')) {
    navBar.style.width = "50vw";
  } else {
    navBar.style.width = "0";
  }
}

var i;
var phraseList = [
  'Personalized for you.',
  'Efficiency certified.',
  'Confidential.',
  'Committed to quality.'
];
var phraseIndex = -1;
var interval;
setTimeout(writeText, 2000);

function writeText() {
  i = 0;
  document.getElementById('typewriter').innerHTML = '';
  phraseIndex = (phraseIndex + 1) % phraseList.length;
  interval = setInterval(addLetter, 50, phraseList[phraseIndex]);
}

function addLetter(phrase) {
  if (i < phrase.length) {
    document.getElementById('typewriter').innerHTML += phrase.charAt(i);
    i++;
  } else {
    clearInterval(interval);
    setTimeout(writeText, 2000);
  }
}
