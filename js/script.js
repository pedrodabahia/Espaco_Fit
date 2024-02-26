$(function(){
    //O SLIDER FOI UMA SOLUÇÃO MOBILE FEITA PARA MELHORAR A VISIBILIDADE DO SITE EM DISPOSITIVOS MOBILES
    //DESENVOLVEDOR: PEDRO MATOS.
    //BIBLIOTECA: JQUERY.
    //LINGUAGEM: JAVASCRIPT.
    var cont = 0;
    var delay = 4000;
    console.log($('.slide-Historia  .content').offset().left)
    //CHAMADA DA FUNCTION PRINCIPAL, HERDANDO OS VALORES DE ALTURA E LARGURA DA TELA DO USUARIO
    
    
    

   function contadorSlider(){
    //FUNCTION QUE FAZ A CONTAGEM PARA A SELEÇÃO DE IMAGENS
     setInterval(function(){    
            playSlider(cont);
            cont++;
            if(cont == $('.imagem').length)
                cont = 0
           
            },delay)
           
    }
   

    function playSlider(cont){
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

let data= {
    name:'samy'
}


$('#buttonInsc').click(function(){
 console.log("CLICOU")

fetch("https://pedrodabahia.github.io/Espaco_Fit/js/bd.json",{
    method: 'POST',
    headers: {
        "Content-Type" : "application/json",
    },body: data
}).then(resp => resp.json()).then(data => {
    console.log(data)
}).catch(err => console.log(err))

})
    
    slider();


})


