
// General Doc Ready JS Functions



$( document ).ready(function() {
// --------------------------------------------------------
      
  //close Nav on off-click
  $( ".content-wrapper" ).click(function() {
    if ($(".sidenav").width() > 0) {
      closeNav();
    }
  });

  var input = document.getElementById("main-search");
  var input2 = document.getElementById("sm-nav-search");

  // Navigate search on enter

  if (input != undefined){
    input.addEventListener("keyup", function(event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        //document.getElementById("search-btn").click();
        //alert("button clicked");
        window.location.href = "./search.html";
      }
    });

  }


  if (input2 != undefined){
    input2.addEventListener("keyup", function(event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        //document.getElementById("search-btn").click();
        //alert("button clicked");
        window.location.href = "./search.html";
      }
    });

  }

});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  animateCSS('.sidenav .material-icons', 'rotateIn')
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  animateCSS('.sidenav .material-icons', 'rotateOut')
}



