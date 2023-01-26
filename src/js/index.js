/* 
Objetivo 1- quando o usuario clicar em "veja trailer" mostrar a modal

Objetivo 2- quando clicar no "X" fecha a modal 

*/

const botaoTrailer = document.querySelector(".botao");
const modal = document.querySelector(".modal");
const fechar = document.querySelector(".fechar-modal");
const video = document.querySelector(".video");
const linktrailer = video.src;


botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");  
    video.setAttribute("src", linktrailer ) 
});

fechar.addEventListener("click", () =>{

    modal.classList.remove("aberto");
    video.setAttribute("src", "" )
});












