// Aguarda o carregamento da página
document.addEventListener("DOMContentLoaded", () => {


    // ===============================
    // EFEITO DE DIGITAÇÃO
    // ===============================

    const titulo = document.querySelector("#titulo-digitacao");

    const textoOriginal = titulo.textContent;

    titulo.textContent = "";

    let index = 0;


    function escreverTexto(){

        if(index < textoOriginal.length){

            titulo.textContent += textoOriginal.charAt(index);

            index++;

            setTimeout(escreverTexto, 60);

        }

    }


    escreverTexto();



    // ===============================
    // ANIMAÇÃO DAS SEÇÕES
    // ===============================

    const secoes = document.querySelectorAll("section");


    secoes.forEach(secao => {

        secao.classList.add("animar");

    });


    const observador = new IntersectionObserver((entradas)=>{


        entradas.forEach(entrada=>{


            if(entrada.isIntersecting){

                entrada.target.classList.add("mostrar");

            }


        });


    });



    secoes.forEach(secao=>{

        observador.observe(secao);

    });



    // ===============================
    // MENU ATIVO
    // ===============================


    const links = document.querySelectorAll(".cabecalho__menu__link");


    window.addEventListener("scroll", ()=>{


        let posicaoAtual = window.scrollY;


        secoes.forEach(secao=>{


            const topo = secao.offsetTop - 150;

            const altura = secao.offsetHeight;

            const id = secao.getAttribute("id");


            if(
                posicaoAtual >= topo &&
                posicaoAtual < topo + altura
            ){

                links.forEach(link=>{

                    link.style.color = "";

                    if(link.getAttribute("href") === "#" + id){

                        link.style.color = "#ffffff";

                    }

                });

            }


        });


    });


});