$(function(){

    // ========================= NEWS SLIDER ================================
    jQuery('#mycarousel').jcarousel({
        vertical: true,
        scroll: 2
    });

    // ============================ TAB ====================================
    $("#usual1 .top-tab").idTabs();
    $("#usual2 .top-tab").idTabs();
    // ========================== SLIDESHOW ==============================
    // $('#iview').iView({
    //     pauseTime: 7000,
    //     directionNav: false,
    //     controlNav: true
    // });
    // ==================== BACK TO TOP ==========================
    $('.backtop a').click(function(){
        $("body, html").animate({scrollTop: 0}, 1000);
    });

    // ============================ TICKET ================================
    $('#vertical-ticker').totemticker({
        row_height  :   '100px',
        next        :   '#ticker-next',
        previous    :   '#ticker-previous'
    });
    
});

