// hide win div
$(".win-elem").fadeOut(0);

// choose a random number between min & max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

// fullscreen btn event on click put the app in full screen
$(".fullscreen").click(function(){
    var isInFullScreen = 
        (document.fullscreenElement && document.fullscreenElement !== null) ||
        (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
        (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
        (document.msFullscreenElement && document.msFullscreenElement !== null);

    var docElm = document.documentElement
    if (!isInFullScreen) {
        $(".fullscreen").addClass('fullscreenRotate')  //btn animation
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen()
        } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen()
        } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen()
        } else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen()
        }
    } else {
        $(".fullscreen").removeClass('fullscreenRotate') //btn animation
        if (document.exitFullscreen) {
            document.exitFullscreen()
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen()
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen()
        }
    }
});

// won message init
window.message = ""


// tourne la roulette en cliquant sur la page
$(".logo-hells").click(function() {
    window.random = getRandomNumber(6105, 5745)
    $(".roulette").addClass("rotate").removeClass("retour")
    $('.rotate').css("transform", "rotate(" + window.random + "deg)")
    $(".disabled").css("display", "block")
    setTimeout(win, 10000);
})

// middle fixed logo border on mousedown
$(".logo-hells").mousedown(function() {
    $(".logo-hells").css(
        {"width": "17%"}
    )
})

// middle fixed logo border none on mouseup
$(".logo-hells").mouseup(function() {
    $(".logo-hells").css(
        {"width": "18%"}
    )
    $(".disabled").css("animation", "fade 1s ease-out");
})

// middle fixed logo border none on mousout
$(".logo-hells").mouseout(function() {
    $(".logo-hells").css(
        {"width": "18%"}
    )
})


// restart the roulette on click
$(".rejoue").click(function() {
    $(".roulette").removeClass("rotate").addClass("retour")
    $('.retour').css({"transform": "rotate(0deg)"});
    // $(".win-elem").css("display", "none");
    $(".win-elem").fadeOut(0);
    $(".disabled").css("display", "none");
});

$(".rejoue").mousedown(function() {
    $(".rejoue").css("transform", "scale(.9)")

});

$(".rejoue").mouseup(function() {
    $(".rejoue").css("transform", "scale(1)")
});

$(".rejoue").mouseout(function() {
    $(".rejoue").css("transform", "scale(1)")
});



// victory message if number write this message and put this image
function win(){
    $(".message-fix").text("YOU WON");
    // $(".win-elem").css("display", "flex");
    $(".win-elem").fadeIn(1500);

    if (window.random >= 5745 && window.random < 5775) {
        window.message = "A RACK OF SHOOTERS*!";
        $(".message").text(window.message);
        $('.win-img').attr('src','images/rackShot.png');
        $('.win-img').css('width','800px');
    } else if (window.random > 5775 && window.random < 5805){
        window.message = "30s BEHIND THE BAR*!";
        $(".message").text(window.message);
        $('.win-img').attr('src','images/clock.png');
        $('.win-img').css('width','170px');
    } else if (window.random > 5805 && window.random < 5835){
        window.message = "A JAGERBOMB*!";
        $(".message").text(window.message);
        $('.win-img').attr('src','images/jager.png');
        $('.win-img').css('width','200px');
    } else if (window.random > 5835 && window.random < 5865){
        window.message = "A SHOOTER!";
        $(".message").text(window.message);
        $('.win-img').attr('src','images/shot.png');
        $('.win-img').css('width','100px');
    } else if (window.random > 5865 && window.random < 5895){
        window.message = "A HUGE COCKTAIL*!";
        $(".message").text(window.message);
        $('.win-img').attr('src','images/hugeCocktail.png');
        $('.win-img').css('width','200px');
    } else if (window.random > 5895 && window.random < 5925){
        window.message = "A GLASS OF WINE*!";
        $(".message").text(window.message);
        $('.win-img').attr('src','images/wine.png');
        $('.win-img').css('width','90px');
    } else if (window.random > 5925 && window.random < 5955){
        window.message = "A REDBULL!";
        $(".message").text(window.message);
        $('.win-img').attr('src','images/redbull.png');
        $('.win-img').css('width','80px');
    } else if (window.random > 5955 && window.random < 5985){
        window.message = "A COCKTAIL*!";
        $(".message").text(window.message);
        $('.win-img').attr('src','images/cocktail.png');
        $('.win-img').css('width','150px');
    } else if (window.random > 5985 && window.random < 6015){
        window.message = "A CHAMPAGNE BOTTLE*!";
        $(".message").text(window.message);
        $('.win-img').attr('src','images/champagne.png');
        $('.win-img').css('width','200px');
    } else if (window.random > 6015 && window.random < 6045){
        window.message = "A SOFT DRINK*!";
        $(".message").text(window.message);
        $('.win-img').attr('src','images/soft.png');
        $('.win-img').css('width','100px');
    } else if (window.random > 6045 && window.random < 6075){
        window.message = "A PINT OF BEER*!";
        $(".message").text(window.message);
        $('.win-img').attr('src','images/pint.png');
        $('.win-img').css('width','110px');
    } else if (window.random > 6075 && window.random < 6105){
        window.message = "A GLASS OF WATER*!";
        $(".message").text(window.message);
        $('.win-img').attr('src','images/water.png');
        $('.win-img').css('width','130px');
    } else if (window.random === 5775 || window.random === 5805 || window.random === 5835 || window.random === 5865 || window.random === 5895 || window.random === 5925 || window.random === 5955 || window.random === 5985 || window.random === 6015 || window.random === 6045 || window.random === 6075 || window.random === 6105 ){
        window.message = "PLAY AGAIN";
        $(".message").text(window.message);
        $('.win-img').attr('src','images/hit.png');
        $('.win-img').css('width','200px');
        $(".message-fix").text("YOU HIT THE LINE");
    }
}

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#7f1f1f"
      },
      "shape": {
        "type": "polygone",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 6
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.3,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#7f1f1f",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

