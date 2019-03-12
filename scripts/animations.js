/* this file has all the animations when the section is loaded in viewport */

var controller = new ScrollMagic.Controller();


var aboutUsScene = new ScrollMagic.Scene({
    triggerElement: "#aboutUsSection",
})
.setTween(TweenMax.staggerFrom(".animate1",1,{y: 200, opacity: 0, delay: 0.5},0.4))
.addTo(controller);


var aboutUsScene = new ScrollMagic.Scene({
    triggerElement: "#aboutUsSection",
    triggerHook: 1,
})
.setTween(TweenMax.from("#tri1",1,{y: 200, opacity: 0, delay: 0.5}))
.addTo(controller);

var probStmtsScene = new ScrollMagic.Scene({
    triggerElement: "#problemStatementsSection",
})
.setTween(TweenMax.staggerFrom(".animate2",1,{y: 200, opacity: 0, delay: 0.5},0.4))
.addTo(controller);

var evtFmtScene = new ScrollMagic.Scene({
    triggerElement: "#eventFormatSection",
})
.setTween(TweenMax.staggerFrom(".animate3",1,{y: 200, opacity: 0, delay: 0.5},0.4))
.addTo(controller);

var rwdScene = new ScrollMagic.Scene({
    triggerElement: "#rewardSection",

})
.setTween(TweenMax.staggerFrom(".animate4",1,{y: 200, opacity: 0, delay: 0.5},0.4))
.addTo(controller);

// var tmlScene = new ScrollMagic.Scene({
//     triggerElement: "#timelineSection",
//     reverse: false,

// })
// .setTween(tween)
// .addTo(controller);

var contactScene = new ScrollMagic.Scene({
    triggerElement: "#contactSection",

})
.setTween(TweenMax.staggerFrom(".animate6",1,{y: 200, opacity: 0, delay: 0.5},0.4))
.addTo(controller);

