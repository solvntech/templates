const carousel = $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 21,
    items: 3,
    autoWidth: true,
    dots: false,
});

setStyleForSlider();

carousel.on("translated.owl.carousel", function () {
    setStyleForSlider();
});

function setStyleForSlider() {
    $(".owl-carousel .owl-stage .owl-item").removeClass("highlight");

    $(".owl-carousel .owl-stage .owl-item.active").each(function (index) {
        if (index === 1) {
            $(this).addClass("highlight");
        }
    });
}
