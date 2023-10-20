$(function(){
    //O SLIDER FOI UMA SOLUÇÃO MOBILE FEITA PARA MELHORAR A VISIBILIDADE DO SITE EM DISPOSITIVOS MOBILES
    //DESENVOLVEDOR: PEDRO MATOS.
    //BIBLIOTECA: JQUERY.
    //LINGUAGEM: JAVASCRIPT.
    var cont = 0;
    var delay = 3000;

    /*CHAMADA DA FUNCTION PRINCIPAL, HERDANDO OS VALORES DE ALTURA E LARGURA DA TELA DO USUARIO*/
    slider($(window).width(),$(window).height());
   
    $(window).resize(function(){
    /*FUNCTION QUE FAZ A CHAMADA DA FUNCTION PRINCIPAL SE A TELA FOR REDIMENSIONADA*/
    /*OBS: O CLEAR INTERVAL É ULTILIZADO PARA QUE A FUNCTION formatedSlider() NÂO SEJA CHAMADA FARIAS VEZES*/
        clearInterval(temporizador);    
        slider($(window).width(),$(window).height());
    });
    
    

   function contadorSlider(){
    /*FUNCTION QUE FAZ A CONTAGEM PARA A SELEÇÃO DE IMAGENS*/
     var temporizador = setInterval(function(){    
            playSlider(cont);
            cont++;
            if(cont == 3)
                cont = 0
            },delay)
    }
   

    function playSlider(cont){
        /*FUNCTION QUE FAZ A TROCA DE IMAGENS NO SLIDE*/
        var imagemVisible =  $('.imagem').eq(cont).offset().left - $('.contentImgs').offset().left;
        $('.imagens').animate({'scrollLeft':imagemVisible-20+"px"});
        console.log("lado esquerdo da imagem: "+$('.imagem').eq(cont).offset().left );
        console.log("Posiçao do scrollBar: "+$('.imagens').scrollLeft());
        console.log(cont);
    }

    function formatedSlider(){
        /*FUNCTION QUE FORMATA OS ESTILOS DA DI IMAGENS DE ACORDO COM O TAMANHOO DA TELA*/
        $('.serviços').attr('style','height: 95vh');
        $('.imagem').attr('style','width : 85vw;height:60vh; display : inline-block;margin-left:20px;');
        $('.contentImgs').attr('style','display:block; width : 279vw;height:60vh;');
        $('.imagens').attr('style',' overflow-y : hidden ; overflow-x : hidden; height:65vh;text-align:left;width:90vw; margin-left:4vw');
    }

    function resetPainel(){
        /*FUNCTION QUE RESETA OS TAMANHOS PARA OS VALORES ORIGINAIS*/
        $(".contentImgs").removeAttr('style');
        $(".imagem").removeAttr('style');
        $(".imagens").removeAttr('style');
    }



   function slider(larguraWin, alturaWin){
        /*FUNCTION PRINCIPAL, QUE REALIZA AS CHAMADAS DE ACORDO COM O TAMANHO DA TELA DO USUARIO*/
        if(larguraWin < alturaWin){
            formatedSlider();
            contadorSlider();
            playSlider();
        }else{
            resetPainel();  
        }
    }
    })
