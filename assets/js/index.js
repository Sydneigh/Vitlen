function checkOrientation() {
    var winWidth = $(window).width();
    var winHeight = $(window).height();

    if (winHeight > winWidth) {
        $('body').width(winBody).height(winBody); // swap the width and height of BODY if necessary
    }
}

checkOrientation(); // Check orientation on page load

// Check orientation on page resize (mainly for demo as it's unlikely a tablet's window size will change)
var resizeEnd;
$(window).resize(function(){ 
   clearTimeout(resizeEnd);
   resizeEnd = setTimeout(checkOrientation, 100);
});