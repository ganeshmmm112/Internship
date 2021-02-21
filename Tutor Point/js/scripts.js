$(document).ready(function() {
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
         //>=, not <=
        if (scroll >= 1) {
            //clearHeader, not clearheader - caps H
            $(".navbarq").addClass("navbar-custom border-bottom border-secondary");
        } else {
          $(".navbarq").removeClass("navbar-custom border-bottom border-secondary");
        }
    }); //missing ); 
    // document ready  
    });