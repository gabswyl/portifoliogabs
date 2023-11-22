// animacao scroll 

const animacao = document.querySelectorAll('.animacao-scroll')
const windowPequeno = window.innerHeight * 0.6

function AnimacaoScroll() {
    animacao.forEach((animar) => {
        const top = animar.getBoundingClientRect().top - windowPequeno; 

        if(top < 0) {
            animar.classList.add('ativo')
        }
    })

} 


window.addEventListener('scroll', AnimacaoScroll)

//menu 

function menuVerify() {
    const menu = document.querySelectorAll('.header_a')
    const fileName = window.location.pathname.split('/').pop();

    menu.forEach((item) => {
        const href = item.getAttribute("href");

        if (fileName === href) {
            item.classList.add('ativo')
        }
    })

}

menuVerify(); 

// Efeito de digitar

function typeWriter(elementos) {
    elementos.forEach(function (elemento) {
        const textoOriginal = elemento.innerHTML;
        elemento.innerHTML = '';

    
        let index = 0;
        const velocidadeDigitacao = 75; 

        function escreverTexto() {
            if (index < textoOriginal.length) {
                elemento.innerHTML += textoOriginal.charAt(index);
                index++;
                setTimeout(escreverTexto, velocidadeDigitacao);
            }
        }


        escreverTexto();
    });
}

const cargo = document.querySelectorAll(".animationjs");
typeWriter(cargo);



// menu mobile 

const botoesMenu = document.querySelectorAll('.menu_list');
const elementosExibirMenu = document.querySelectorAll('.exibirMenu');

botoesMenu.forEach(botao => {
    botao.addEventListener("click", (e) => {
        e.preventDefault();

        elementosExibirMenu.forEach(elemento => {
            elemento.classList.toggle('ativo');
        });
    });
});

