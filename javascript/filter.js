const genero = [
    { id: 1, nome: 'Todos os jogos' },
    { id: 2, nome: 'Aventura' },
    { id: 3, nome: 'Ação' },
    { id: 4, nome: 'Esportes' },
    { id: 5, nome: 'RPG' },
    { id: 6, nome: 'Estratégia' },
    { id: 7, nome: 'Simulação' },
    { id: 8, nome: 'Corrida' },
    { id: 9, nome: 'Plataforma' },
    { id: 10, nome: 'Terror' },
    { id: 11, nome: 'Luta' },
    { id: 12, nome: 'Puzzle' },
    { id: 13, nome: 'Ficção Científica' },
    { id: 14, nome: 'Futebol' },
    { id: 15, nome: 'Mundo aberto' },
    { id: 16, nome: 'Musical' },
    { id: 17, nome: 'Sobrevivência' },
    { id: 18, nome: 'FPS' },

]

function criarFiltro() {
    const template = document.getElementById('filter-template');
    const container = document.getElementById('listaGenero');

    genero.forEach( genero => {
        const clone = template.content.cloneNode(true);

        clone.querySelector(".genero-nome").textContent = genero.nome;

        container.appendChild(clone);
    })
}

document.addEventListener('DOMContentLoaded', criarFiltro);




// rolagem lateral
const rolarLateral = document.getElementById('listaGenero');

let isDragging = false;
let startX;
let scrollLeft;

rolarLateral.addEventListener('mousedown', (e) => {
    isDragging = true;
    rolarLateral.classList.add('active');
    startX = e.pageX - rolarLateral.offsetLeft;
    scrollLeft = rolarLateral.scrollLeft;
});

rolarLateral.addEventListener('mouseup', () => {
    isDragging = false;
    rolarLateral.classList.remove('active');
});

rolarLateral.addEventListener('mouseleave', () => {
    isDragging = false;
    rolarLateral.classList.remove('active');
});

rolarLateral.addEventListener('mousemove', (e) => {
    if (!isDragging) return; 
    e.preventDefault();
    const x = e.pageX - rolarLateral.offsetLeft;
    const walk = (x - startX) * 2; // Ajuste a velocidade do arrasto multiplicando
    rolarLateral.scrollLeft = scrollLeft - walk;
});