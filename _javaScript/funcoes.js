var intervalo = setInterval(function () {
    clearInterval(intervalo);

    document.getElementById('carregando').style.display = "none";
    document.getElementById('corpo').style.display = "block";
}, 2000

        );

$(function () {
    $('.botaoMenu').click(function (event) {
        event.stopPropagation();
        if (!$(this).hasClass('menuAtivo')) {
            $(this).addClass('menuAtivo');
            $('nav ul').animate({'left': '0px'}, 300);
        } else {
            $(this).removeClass('menuAtivo');
            $('nav ul').animate({'left': '-100%'}, 300);
        }
    });

    $('body').on('click', function () {
        $('.botaoMenu').removeClass('menuAtivo');
        $('nav ul').animate({'left': '-100%'}, 300);

    });
    
    $('.linkMenu').on('click',function(){
        $('.botaoMenu').removeClass('menuAtivo');
        $('nav ul').animate({'left': '-100%'}, 300);
    });

    $('#slideshow-banner').slide({
        cdTime: 5000,
        controllerLeftButton: "_imagens/esquerda.png",
        controllerRightButton: "_imagens/direita.png"
    });


    $('.fancybox').fancybox({
        openEffect: 'elastic',
        openSpeed: 150,
        closeEffect: 'fade',
        closeSpeed: 200,
        prevEffect: 'none',
        nextEffect: 'none',
        closeBtn: false,
        helpers: {title: {type: 'inside'},
            buttons: {}}
    });

    $('.fancyboxFormulario').fancybox({
        openEffect: 'fade',
        openSpeed: 150,
        closeEffect: 'fade',
        closeSpeed: 200,
        title: false
    });

    var $doc = $('html,body');
    $('.scrollSuave').click(function () {
        $doc.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });

    $(document).scroll(function () {
        if ($(this).scrollTop() > 400) {
            document.getElementById("voltarTopo").style.display = "block";
        } else {
            document.getElementById("voltarTopo").style.display = "none";
        }
    });



});




