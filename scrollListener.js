
// scroll listener 

function scrollListener() {

    const rolagem = document.querySelector(".dev_arrow")
    const title = document.querySelector('.habilidades-titulo')

    rolagem.addEventListener('click', (e) => {
        e.preventDefault;
        title.scrollIntoView({ behavior: "smooth" });
    })
}

scrollListener(); 