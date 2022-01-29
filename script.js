function burgerMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function homeToProjectScroll(){
  document.getElementById('projects-home').scrollIntoView();
}