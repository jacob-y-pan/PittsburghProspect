(function ($) {
    var controller = new ScrollMagic.Controller();
    var title = $('.title');
    TweenLite.from(title, 1, { x: -200});
    /*var ourScene = new ScrollMagic.Scene({
        triggerElement: ".title",
        triggerHook: 0.6,
        reverse: false
    })
    .setTween(tween)*/
})(jquery);