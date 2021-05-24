var projectList = document.getElementsByClassName('grid-item');
for (var i = 0; i < projectList.length; i++) {
  projectList[i].addEventListener('click', handleClick);
}

function handleClick() {
  document.getElementsByClassName('projectFrame')[0].classList.add('selectedProject');
}
