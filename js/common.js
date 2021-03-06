function wResize() {
   var album_height = $('#albums .album-wrap img').height();
    $('#albums .album-wrap .descr').css('height', album_height);
    var contacts_height = $('#contacts .contact-wrap img').height();
    $('#contacts .contact-wrap .descr').css('height', contacts_height);

    var window_width = $(window).width();
    if (window_width > 1250) {

        $("header").css("background-attachment", "fixed");
    } else {
        $("header").css("background-attachment", "");
    }
};

function img_fun(image) {
    var img = new Image();
    img.onload = function() {
        console.log(this.height);
        wResize();
    }
    img.src = image.attr("src");
}

$(document).load(function() {
    img_fun(img)
    wResize();
});

$(document).ready(function() {
    img_fun($('img'));
    wResize();
    $(window).resize(function() {
        wResize();
    });

     $("body").on("click", ".arrov-up", function (event) {
        event.preventDefault();
        $('body,html').animate({scrollTop: 0}, 1000);
    })

    $('.works-popup').magnificPopup({
        // Delay in milliseconds before popup is removed
         removalDelay: 300,

         // Class that is added to popup wrapper and background
         // make it unique to apply your CSS animations just to this exact popup
         mainClass: 'mfp-fade'
    });
    
    $('.popup').magnificPopup({
        mainClass: 'mfp-move-from-top', // this class is for CSS animation below
        removalDelay: 300,
        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 1000, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function
            removalDelay: 500, //delay removal by X to allow out-animation
            callbacks: {
                beforeOpen: function() {
                    // just a hack that adds mfp-anim class to markup 
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = this.st.el.attr('data-effect');
                    this.content.addClass('mfp-removing');
                }, 
                beforeClose: function() {
                        this.content.addClass('mfp-removing');
                    }
                },
                closeOnContentClick: true,
                midClick: true,
                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function(openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
    });

    var owl = $("#work-photos-slider");
     
      owl.owlCarousel({
        loop:true,
        navigation : true,
        singleItem : true,
        transitionStyle : "fade"
      });

});