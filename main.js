
// General Doc Ready JS Functions



$( document ).ready(function() {
// --------------------------------------------------------
      
  //close Nav on off-click
  $( ".content-wrapper" ).click(function() {
    if ($(".sidenav").width() > 0) {
      closeNav();
    }
  });

  $( ".btn-search" ).click(function() {
    window.location.href = "./search.html";
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


// ---------- Count up animation for artist summary page ---------

        var options = { 
          duration: 20, 
          useEasing: true,
            useGrouping: true,
            separator: ',',
            decimal: '.',
            prefix: '$',
            suffix: ''
        };

          $('.countupthis').each(function() {
            var num = $(this).attr('numx'); //end count
            var nuen = $(this).text();
            if (nuen === "") {
              nuen = 0;
            }
            var counts = new CountUp(this, nuen, num, 0, 5, options);
            counts.start();
          });


          // $("input").keydown(function(e) {
          //   var oldvalue=$(this).val();
          //   var field=this;
          //   setTimeout(function () {
          //       if(field.value.indexOf('#') !== 0) {
          //           $(field).val(oldvalue);
          //       } 
          //   }, 1);
          //   });

});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  animateCSS('.sidenav .material-icons', 'rotateIn')
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  animateCSS('.sidenav .material-icons', 'rotateOut')
}


$.fn.isInViewport = function () {
  let elementTop = $(this).offset().top;
  let elementBottom = elementTop + $(this).outerHeight();

  let viewportTop = $(window).scrollTop();
  let viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};
