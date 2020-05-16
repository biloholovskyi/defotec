$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1,
                dots:true
                
            },
            600:{
                items:1,
                dots:true
                
            },
            1100:{
                items:3,
                
                
            }
        }
    });

});