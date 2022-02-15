window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navBar = document.getElementById("navBar");
  /* add shadow to the navbar on scroll */
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    navBar.style.boxShadow = "0 2px 4px 0 rgb(0 52 61 / 12%)";
  } else {
    navBar.style.boxShadow = "0 0px 0px 0 rgb(0 0 0 / 0%)";
  }

  /* change the colour and font colour once scrolled to projects */
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    navBar.style.backgroundColor = "var(--background-black)";
    var innerDivs = navBar.getElementsByTagName("A");
    for(var i = 0; i < innerDivs.length; i++){
      innerDivs[i].style.color = "white";
    }
    navBar.style.borderBottom = "1px solid grey";
  } else {
    document.getElementById("navBar").style.backgroundColor = "var(--background-gray)";
    var innerDivs = navBar.getElementsByTagName("A");
    for(var i = 0; i < innerDivs.length; i++){
      innerDivs[i].style.color = "black";
    }
    navBar.style.border = "0";
  }
}

function burgerMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function homeToProjectScroll(){
  const id = 'projects-home';
  const yOffset = -50; 
  const element = document.getElementById(id);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({top: y, behavior: 'smooth'});
}