$(function(){
    //O SLIDER FOI UMA SOLUÇÃO MOBILE FEITA PARA MELHORAR A VISIBILIDADE DO SITE EM DISPOSITIVOS MOBILES
    //DESENVOLVEDOR: PEDRO MATOS.
    //BIBLIOTECA: JQUERY.
    //LINGUAGEM: JAVASCRIPT.
    var cont = 0;
    var delay = 6000;

    /*CHAMADA DA FUNCTION PRINCIPAL, HERDANDO OS VALORES DE ALTURA E LARGURA DA TELA DO USUARIO*/
    
    
    

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
        $('.imagem').attr('style','width : 75vw;height:40vh; display : inline-block;margin-left:3vw;margin-top:6px;border-left: 3vw solid white;box-sizing:border-box');
        $('.contentImgs').attr('style','display:block; width : 279vw;height:60vh;');
        $('.imagens').attr('style',' overflow-y : hidden ; overflow-x : hidden; height:60vh;text-align:left;width:80vw; margin-left:-3vw;display:inline-block');
        $('body').css('background-color','white')
        $('header,section.sobre-empresa, section.serviços,section.depoimentos, section.formulario').css('margin-top','2vw').css('border-radius','12px').css('background-image','linear-gradient(to bottom right, rgb(0, 0, 0), rgb(0, 3, 54),rgb(0, 0, 0))').css('width','100%').css('height','95vh').css('box-shadow','0 0 6px black')
        $('header').css('margin','0').css(' margin-top','0').css('width','100%').css('height','100vh').css(' border-top-left-radius','0').css('border-top-right-radius','0')
        $('section.sobre-empresa .text-sobre').css('padding', '5vh 0')
        $('section.sobre-empresa .text-sobre h1').css('font-size','10vh')
        $('section.sobre-empresa .text-sobre p').css( 'font-size', '2.7vh').css( 'width','70%').css('margin-left',' 7vh;').css(' text-align','justify').css('display','block').css()
        $('section.sobre-empresa .text-sobre a').css('font-size','3vh').css('display',' block').css('margin-left','-45vh')
        $('section.sobre-empresa .text-sobre, section.sobre-empresa .banners-atletas').css('width','90%').css('height','45%').css('display','block;').css('overflow',' hidden').css('float','unset').css('display','inline-block').css('position','static').css('margin','0vw');
        $('section.sobre-empresa .banners-atletas').css('align-items','center').css('text-align','center').css('overflow','none')
        $('section.sobre-empresa ').css('align-items','center').css('text-align','center')
        $('section.sobre-empresa .img-atleta:first-child').css('margin-left','9vw')
        $('section.sobre-empresa .img-atleta:last-child').css('margin-top','2vw').css('height','90%')
        $('section.serviços .imagens .contentImgs .imagem').css('text-align','center').css('border-shadow','0 1px 2px rgb(125, 125, 125)')
        $('section.serviços .imagens .contentImgs .imagem h2').css('color','white')
        $('section.serviços .imagens .contentImgs .imagem:hover h2').css('text-shadow','0 0 20px rgb(000, 100, 220)')
        $('section.serviços .imagens').css('box-sizing','border-box').css('margin-top','-5vh')
        $('section.serviços .title').css('margin-top','0').css('padding-top','40px').css('font-size','2.7vw');
        $('section.serviços .title h1').css('font-size','10vw')
        $('section.serviços .imagens .contentImgs .textcomplement').css('display','flex')
        $('section.depoimentos').css('','')
        $('section.formulario').css('width','100%').css('margin','2vw 0 0 0').css('border-radius','12px').css('border-bottom-left-radius','0').css('border-bottom-right-radius','0')
        $('').css('','')
        $('').css('','')
        $('').css('','')
        $('').css('','')
        $('').css('','')
        $('').css('','')
        $('').css('','')
        $('').css('','')
        $('').css('','')
        $('').css('','')
        $('').css('','')
        $('').css('','')
        $('').css('','')
        $('').css('','')


























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
        console.log("conte")
    }
    
    slider($(window).width(),$(window).height())
   window.addEventListener('resize',() =>{
    slider($(window).width(),$(window).height())
   })

})
