window.onscroll = (() => {
  var navBar = document.getElementById("navBar");
  var mobilenavbar = document.getElementById("mobileNavbar");

  /* change the height, font colour and shadow of navbar once scrolled */
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    navBar.style.height = "4em";
    navBar.style.boxShadow = "0 3px 5px rgb(0 0 0 / 0.2)";
    mobilenavbar.style.height = "3em";
    mobilenavbar.style.boxShadow = "0 3px 5px rgb(0 0 0 / 0.2)";
  } else {
    navBar.style.height = "7em";
    navBar.style.boxShadow = "0 0px 0px rgb(0 0 0 / 0.0)";
    mobilenavbar.style.height = "4em";
    mobilenavbar.style.boxShadow = "0 0px 0px rgb(0 0 0 / 0.0)";
  }
});




function burgerMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function homeToProjectScroll(){
  const yOffset = -50; 
  const element = document.getElementById('projects-home');
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({top: y, behavior: 'smooth'});
}