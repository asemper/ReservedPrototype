
function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element)
  node.classList.add('animated', animationName)

  function handleAnimationEnd() {
      node.classList.remove('animated', animationName)
      node.removeEventListener('animationend', handleAnimationEnd)

      if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  animateCSS('.sidenav .material-icons', 'rotateIn')
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  animateCSS('.sidenav .material-icons', 'rotateOut')
}

// General Doc Ready JS Functions

$( document ).ready(function() {
  //close Nav on off-click
  $( ".content-wrapper" ).click(function() {
    if ($(".sidenav").width() > 0) {
      closeNav();
    }
  });

});