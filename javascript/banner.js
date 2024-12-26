const banner = document.getElementById('banner-titulo');
const titulos = ["Compre", "Venda", "Troque"];
let indice = 0;

function alterarTitulo() {
    banner.textContent = titulos[indice];
    indice = (indice + 1) % titulos.length; 
} 
setInterval(alterarTitulo, 2500);

