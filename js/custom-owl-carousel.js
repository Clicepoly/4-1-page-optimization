$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        navText: [
            '<button aria-label="Previous slide" class="owl-prev">Previous</button>',
            '<button aria-label="Next slide" class="owl-next">Next</button>'
        ],
        center: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
});