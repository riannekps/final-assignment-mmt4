$(document).ready(function () {
    $(function () {
        $("#accordion").accordion({
    
        });
        
        $("#accordion .ui-accordion-content").css({ "background-color": "white" });
        $("#accordion .ui-accordion-content").css({ "height": ""});

        $(".ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default, .ui-button, html .ui-button.ui-state-disabled:hover, html .ui-button.ui-state-disabled:active").css({ "color": "black" });
        $(".ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default, .ui-button, html .ui-button.ui-state-disabled:hover, html .ui-button.ui-state-disabled:active").css({ "background": "white" });

    });

    var geklikt = false;
    var player = videojs('video1', {

    });

    $(".toggle").click(function () {
        event.preventDefault();
        if ( $( this ).is( "#toggle1" ) ) {
          player = videojs('video1', {

          }); 
        }

        if ( $( this ).is( "#toggle2" ) ) {
          player = videojs('video2', {

          }); 
        }

        if ( $( this ).is( "#toggle3" ) ) {
          player = videojs('video3', {

          }); 
        }

        if ( $( this ).is( "#toggle4" ) ) {
          player = videojs('video4', {

          }); 
        }

        if ( $( this ).is( "#toggle5" ) ) {
          player = videojs('video5', {

          }); 
        }

      if (geklikt == false) {
            player.play();
            geklikt = true;
            $( this ).css({ "background-image": "url(img/pause@2x.png)" });

        } else {
            player.pause();
            geklikt = false;
            $( this ).css({ "background-image": "url(img/play@2x.png)" });
        }
        console.log(geklikt);
    });

    $(".rewind").click(function () {
        player.currentTime(player.currentTime() - 10);
    });

    $( function() {
        $( "#dialog" ).dialog({
          autoOpen: false,
          show: {
            effect: "bounce",
            duration: 1200
          },
          hide: {
            effect: "fade",
            duration: 200
          }
        });
     
        $( ".check" ).on( "click", function() {
          $( "#dialog" ).dialog( "open" );

          if ( $( this ).is( "#check1" ) ) {
            $("#vinkje1").removeClass('onzichtbaar');
          }

          if ( $( this ).is( "#check2" ) ) {
            $("#vinkje2").removeClass('onzichtbaar');
          }

          if ( $( this ).is( "#check3" ) ) {
            $("#vinkje3").removeClass('onzichtbaar');
          }

          if ( $( this ).is( "#check4" ) ) {
            $("#vinkje4").removeClass('onzichtbaar');
          }

          if ( $( this ).is( "#check5" ) ) {
            $("#vinkje5").removeClass('onzichtbaar');
          }
          
        });
      } );

      

    var toggled = false;
    function toggledark() {
    }
    $('#toggledark').click(function () {
    if(!toggled)    {
        $("body").removeClass('light');
        $("body").addClass('dark');
        $("#accordion h3").css({ "background-color": "#000" });
        $("#accordion .titelaccordion").css({ "color": "white" });
        $("#accordion .ui-accordion-content").css({ "background-color": "#000" });
        $("#accordion").removeClass('light')
        $("#accordion ").addClass('dark');
        $(".ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default, .ui-button, html .ui-button.ui-state-disabled:hover, html .ui-button.ui-state-disabled:active").addClass('dark');
        $(".slider").css({ "background-color": "#1D00FF" });
        $(".slider").animate({left: '55%'});

        
        toggled = true;
        console.log("DARK");
    }else{+
        $("body").removeClass('dark');
        $("body").addClass('light');
        $("#accordion h3").css({ "background-color": "#fff" });
        $("#accordion .titelaccordion").css({ "color": "rgb(48, 48, 48);" });
        $("#accordion .ui-accordion-content").css({ "background-color": "#fff" });
        $("#accordion").removeClass('dark');
        $("#accordion ").addClass('light');
        $(".ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default, .ui-button, html .ui-button.ui-state-disabled:hover, html .ui-button.ui-state-disabled:active").addClass('light');
        $(".slider").css({ "background-color": "#ccc" });
        $(".slider").animate({left: '0%'});
        toggled = false;
    }
    })
    
})