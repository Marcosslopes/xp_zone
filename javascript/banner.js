const banner = document.getElementById('banner-titulo');
const titulos = ["Compre", "Venda", "Troque"];
let indice = 0;

function alterarTitulo() {
    banner.textContent = titulos[indice];
    indice = (indice + 1) % titulos.length; 
} 
setInterval(alterarTitulo, 2500);


const consoles = [
    {nome: 'PS4', imagem: 'images/ps4.png', qntd: '874'},
    {nome: 'Xbox One', imagem: 'images/xbox.png', qntd: '123'},
    {nome: 'PS3', imagem: 'images/ps4.png', qntd: '456'},
    {nome: 'Xbox 360', imagem: 'images/xbox.png', qntd: '456'},
]

function criarConsole(){
    const template = document.getElementById('console-template');
    const container = document.getElementById('listaConsoles');

    consoles.forEach( consoles => {
        const clone = template.content.cloneNode(true);

        clone.querySelector(".nomeConsole").textContent = consoles.nome;
        clone.querySelector("img").src = consoles.imagem;
        clone.querySelector(".qntd").textContent = consoles.qntd;

        container.appendChild(clone);      
    })

}

document.addEventListener('DOMContentLoaded', criarConsole);


const jogos = [
    {nome: 'Uncharted 4', qualidade: 'Super novo', imagem: '../images/jogo1.png'},
    {nome: 'Mortal Kombat 1', qualidade: 'Super novo', imagem: '../images/mortal.png'},
    {nome: 'God of war Ragnarok', qualidade: 'Super novo', imagem: '../images/gow.png'},
    {nome: 'The last of us 2', qualidade: 'Super novo', imagem: '../images/last.png'},
  
]
  
function criarDestaque(){
    const template2 = document.getElementById('destaque-template');
    const container2 = document.getElementById('listaDestaques');

    jogos.forEach( jogos => {
        const clone2 = template2.content.cloneNode(true);

        clone2.querySelector(".nomeDestaque").textContent = jogos.nome;
        clone2.querySelector("img").src = jogos.imagem;
        clone2.querySelector(".qualidade").textContent = jogos.qualidade;

        container2.appendChild(clone2);      
    })

}

document.addEventListener('DOMContentLoaded', criarDestaque);




