var projectList = document.getElementsByClassName('grid-item');
for (var i = 0; i < projectList.length; i++) {
  projectList[i].addEventListener('click', handleOpen);
}

document.getElementsByClassName('exit')[0].addEventListener('click', handleClose);

function handleOpen() {
  document.getElementsByClassName('frame-wrapper')[0].classList.add('selected-project');
  for (var i = 0; i < projectList.length; i++) {
    projectList[i].style.opacity = '0.5';
  }
}

function handleClose() {
  document.getElementsByClassName('frame-wrapper')[0].classList.remove('selected-project');
  for (var i = 0; i < projectList.length; i++) {
    projectList[i].style.opacity = '1';
  }
}
