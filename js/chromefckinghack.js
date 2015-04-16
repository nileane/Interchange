/*
 * Ok, this is a f*cking hack I didn't want to implement. But Chrome is f*cking buggy when a CSS transform
 * translate animation happens, it F*CKING F*CKS EVERYTHING UP WITH overflow:scroll/auto;
 *
 * Anyway, have the fucking hack.
 * Here's the bug report btw : https://code.google.com/p/chromium/issues/detail?id=417345
 *
 *
 */
$('.screens-ct').on('transitionend webkitTransitionEnd', function(evt){
    $('.screens-ct > section').css({overflow:'hidden'});
    setTimeout( "$('.screens-ct > section').css({overflow:'auto'});", 1 );
});
