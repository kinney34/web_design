document.getElementsByClassName('grid-container')[0].addEventListener('click', handleClick);
var gridItems = document.getElementsByClassName('grid-item');
for (item of gridItems) {
  setBackground(item);
}

function handleClick() {
  var x = event.target;
  if (x.tagName === 'H1' || x.className === 'grid-item') {
    var name = x.innerHTML.replace(/\s/g, '');
    selectBox(name);
  }
}

function setBackground(item) {
  var name = item.getElementsByTagName('H1')[0].innerHTML.replace(/\s/g, '');
  var picture = document.createElement('img');
  var picture_src = getMonster(name).image;
  picture.setAttribute('src', picture_src);
  item.appendChild(picture);
}

//create div to hold info
//pass new div and key to fillDisplay
//append new div to outer div
function selectBox(name) {
  var display = document.createElement('div');
  display.id = 'selected';

  var exit_button = document.createElement('div');
  exit_button.classList.add('exit');
  exit_button.addEventListener('click', closeBox);
  display.appendChild(exit_button);

  display.setAttribute('data-aos', 'flip-left');
  display = fillDisplay(display, name);

  var container = document.getElementsByTagName('body')[0];
  container.appendChild(display);
  var content = document.getElementsByClassName('content');
  content[0].classList.add('opaque');
}

//remove selected div
//called on exit button click
function closeBox() {
  var x = document.getElementById('selected');
  x.remove();
  var content = document.getElementsByClassName('content');
  content[0].classList.remove('opaque');
}

//fetches info to populate newElement
//returns completed div
//newElement: new div to be added to DOM
//name: monster name (string)
function fillDisplay(newElement, name) {
  var monster = getMonster(name);

  var header = document.createElement('div');
  var title = document.createElement('h1');
  title.innerHTML = monster.name;

  var place = document.createElement('h4');
  place.innerHTML = monster.location;

  var pic = document.createElement('img');
  var pic_src = document.createAttribute('src');
  pic_src.value = monster.image;
  pic.setAttributeNode(pic_src);

  //header.appendChild(pic);
  header.appendChild(title);
  header.appendChild(place);
  header.classList.add('title-div');

  var text = document.createElement('p');
  text.innerHTML = monster.entry;

  newElement.append(pic);
  newElement.append(header);
  newElement.append(text);
  return newElement;
}
