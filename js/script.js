$(function(){
    //O SLIDER FOI UMA SOLUÇÃO MOBILE FEITA PARA MELHORAR A VISIBILIDADE DO SITE EM DISPOSITIVOS MOBILES
    //DESENVOLVEDOR: PEDRO MATOS.
    //BIBLIOTECA: JQUERY.
    //LINGUAGEM: JAVASCRIPT.
    var cont = 0;
    var delay = 2000;
    console.log($('.slide-Historia  .content').offset().left)
    //CHAMADA DA FUNCTION PRINCIPAL, HERDANDO OS VALORES DE ALTURA E LARGURA DA TELA DO USUARIO
    
    
    

   function contadorSlider(){
    //FUNCTION QUE FAZ A CONTAGEM PARA A SELEÇÃO DE IMAGENS
     setInterval(function(){    
            playSlider(cont);
            cont++;
            if(cont == 11)
                cont = 0
           
            },delay)
           
    }
   

    function playSlider(cont){
         console.log(cont)
         console.log($('.imagem').length)
         $('.slide-Historia .content').css('width', $('.imagem').width() * $('.imagem').length)
        //FUNCTION QUE FAZ A TROCA DE IMAGENS NO SLIDE
        var imagemVisible =  $('.imagem').eq(cont).offset().left - $('.slide-Historia .content').offset().left;
        $('.slide-Historia').animate({'scrollLeft':imagemVisible});
    }

   function slider(){
        //FUNCTION PRINCIPAL, QUE REALIZA AS CHAMADAS DE ACORDO COM O TAMANHO DA TELA DO USUARIO
            contadorSlider();
            playSlider();
    }
    
    slider()
})