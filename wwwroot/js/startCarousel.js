export function initCarousel(){
    $("#carousel").Cloud9Carousel( {
        buttonLeft: $("#buttons > .left"),
        buttonRight: $("#buttons > .right"),
        autoPlay: false,
        bringToFront: true,
        onLoaded: function( carousel ) {
            // Show carousel
            $(carousel).css( 'visibility', 'visible' );
            console.log( 'Carousel is ready!' );
        },
    } );
    console.log('Initiated')
}