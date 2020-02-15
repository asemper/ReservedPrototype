
// General Doc Ready JS Functions



$( document ).ready(function() {

    var controller = new ScrollMagic.Controller();
    
      //reverse: false --> This makes the scroll effect only happen Once. Scorlling up does not re-enable the effect ( to be put in scene var)
      // triggerElement: this.children[0] can target the any child element inside the trigger element 
    // ----------Info-Sec 3------------
    // var scene3 = new ScrollMagic.Scene({
    //   triggerElement: '#info-sec-3 .info-header',
    //   duration: '90%'
    // })
    // .setClassToggle('#info-sec-3', 'fade-in') // add class
    // .addIndicators({
    //   name:'fade-scene 3',
    //   colorTrigger:'black',
    //   colorStart:'green',
    //   colorStart:'red'
    // })
    // .addTo(controller);
  
    // basic transition for all sections
    $('.info-section').each(function(){
      var sectionFadeScene = new ScrollMagic.Scene({
        triggerElement: this,
        duration: '101%'
      })
      .setClassToggle(this, 'fade-in') // add class
      .addIndicators({
        name:'fade-scene 3',
        colorTrigger:'black',
        colorStart:'green',
        colorStart:'red'
      })
      .addTo(controller);
    });
  
    //pin main content page
    var pintIntro = new ScrollMagic.Scene({
      triggerElement:'.content-wrapper',
      triggerHook:0,
      duration:'100%'
    })
    .setPin('.content-wrapper',{pushFollowers:false})
    .addTo(controller)
    //pin again
    // var pintIntroScene2 = new ScrollMagic.Scene({
    //   triggerElement:'#info-sec-1',
    //   triggerHook:0,
    //   duration:'100%'
    // })
    // .setPin('.content-wrapper',{pushFollowers:false})
    // .addTo(controller)
  
    //Bird Scene
    // var images = [
    //   "Images/bird-seq-1.png",
    //   "Images/bird-seq-2.png",
    //   "Images/bird-seq-3.png",
    //   "Images/bird-seq-4.png",
    //   "Images/bird-seq-5.png",
    //   "Images/bird-seq-6.png",
    //   "Images/bird-seq-7.png",
    //   "Images/bird-seq-8.png",
    //   "Images/bird-seq-1.png",
    //   "Images/bird-seq-2.png",
    //   "Images/bird-seq-3.png",
    //   "Images/bird-seq-4.png",
    //   "Images/bird-seq-5.png",
    //   "Images/bird-seq-6.png",
    //   "Images/bird-seq-7.png",
    //   "Images/bird-seq-8.png",
    // ];

    var images = [
      "Images/flower1.png",
      "Images/flower2.png",
      "Images/flower3.png",
      "Images/flower4.png",
      "Images/flower5.png",
      "Images/flower6.png",
      "Images/flower7.png",
      "Images/flower8.png",
      "Images/flower9.png",
      "Images/flower10.png",
      "Images/flower11.png",
      "Images/flower12.png",
      "Images/flower12.png",
      "Images/flower13.png",
      "Images/flower14.png",
      "Images/flower15.png",
      "Images/flower16.png",
      "Images/flower17.png",
      "Images/flower18.png",
    ]
    
      // TweenMax can tween any property of any object. We use this object to cycle through the array
      var obj = {curImg: 0};
  
      // create tween
      var tween = TweenMax.to(obj, 0.5,
          {
              curImg: images.length - 1,	// animate propery curImg to number of images
              roundProps: "curImg",				// only integers so it can be used as an array index
              repeat: 200,									// repeat 3 times
              immediateRender: true,			// load first image automatically
              ease: Linear.easeNone,			// show every image the same ammount of time
              onUpdate: function () {
                $("#frameImages").attr("src", images[obj.curImg]); // set the image source
              }
          }
      );
  
      // build bird scene
      var scene = new ScrollMagic.Scene({triggerElement: "#info-sec-1", duration: '100%'})
                      .setTween(tween)
                      .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
            
  
     // ----------Info-Sec 2------------
     var scene3 = new ScrollMagic.Scene({
       triggerElement: '#info-sec-2',
       duration: '90%'
     })
     .setClassToggle('#info-sec-2', 'slide-left') // add class
     .addIndicators({
       name:'slide in',
       colorTrigger:'black',
       colorStart:'green',
       colorStart:'red'
     })
     .addTo(controller);
  
  // info sec 3,4,5
  
          // define movement of panels
          var wipeAnimation = new TimelineMax()
              // animate to second panel
              .to("#slideContainer", 0.5, {z: -150})		// move back in 3D space
              .to("#slideContainer", 1,   {x: "-25%"})	// move in to first panel
              .to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space
              // animate to third panel
              .to("#slideContainer", 0.5, {z: -150, delay: 2})
              .to("#slideContainer", 1,   {x: "-50%"})
              .to("#slideContainer", 0.5, {z: 0})
              // animate to forth panel
              .to("#slideContainer", 0.5, {z: -150, delay: 2})
              .to("#slideContainer", 1,   {x: "-75%"})
              .to("#slideContainer", 0.5, {z: 0});
  
          // create scene to pin and link animation
          var horizontalScenes = new ScrollMagic.Scene({
                  triggerElement: "#pinContainer",
                  triggerHook: "onLeave",
                  duration: "250%"
              })
              .setPin("#pinContainer")
              .setTween(wipeAnimation)
              .addIndicators() // add indicators (requires plugin)
              .addTo(controller);




              // ---------------------------


              
              $(function () { // wait for document ready
                // init
                var controller = new ScrollMagic.Controller();
            
                // define movement of panels
                var wipeAnimation = new TimelineMax()
                  .fromTo("section.panel2.info-sec-7", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
                  .fromTo("section.panel2.info-sec-8",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
                  .fromTo("section.panel2.info-sec-9", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top
            
                // create scene to pin and link animation
                new ScrollMagic.Scene({
                    triggerElement: "#pinContainer2",
                    triggerHook: "onLeave",
                    duration: "300%"
                  })
                  .setPin("#pinContainer2")
                  .setTween(wipeAnimation)
                  .addIndicators() // add indicators (requires plugin)
                  .addTo(controller);
              });
  
  });
  
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
  
  
  