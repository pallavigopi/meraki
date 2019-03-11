/* this file has all the animations when the section is loaded in viewport */

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: "#aboutUsSection",
    duration: 200
})
.setTween(TweenMax.fromTo("#animate1",{opacity:0}, {opacity: 1}))
.addTo(controller);