window.onscroll = function() { fadeTitle() };

function fadeTitle() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById('title').className = 'scrolling-down';
  } else {
    document.getElementById('title').className = '';
  }
}
