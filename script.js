const elementos=document.querySelectorAll('[data-anima]');
const animacaoClass='animacao';

function animaRolagem(){
    const topoPagina=window.pageYOffset+((window.innerHeight)*0.9);
    elementos.forEach(function(elemento){
        if(topoPagina > elemento.offsetTop){
            elemento.classList.add(animacaoClass);
        }else{
            elemento.classList.remove(animacaoClass);
        }
    });
}

if(elementos.length){
    window.addEventListener('scroll', function(){
        animaRolagem();
    })
}

//Função para aparecer um alerta na tela que a menssagem foi enviada com sucesso!
const btnEnviar = document.querySelector('#enviar')
btnEnviar.addEventListener('click', function() {
    alert('Menssagem enviada com sucesso!')
})