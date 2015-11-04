function wResize() {
   var album_height = $('#albums .album-wrap img').height();
    $('#albums .album-wrap .descr').css('height', album_height);
    var contacts_height = $('#contacts .contact-wrap img').height();
    $('#contacts .contact-wrap .descr').css('height', contacts_height);
};


$(document).load(function() {
    wResize();
});

$(document).ready(function() {
    wResize();
    $(window).resize(function() {
        wResize();
    });

	$('.popup').magnificPopup();
	
});