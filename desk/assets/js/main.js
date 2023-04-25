$(function (){

    $(".galeria").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 300,
    adaptiveHeight: true,
    });

    $(".galeria").on('afterChange', function(){
    $("#ofdtvai229").text( $(".slick-center").data("name"));
    });



    


})