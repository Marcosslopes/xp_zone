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
function configurarRolagemLateral(elemento) {
    let isDragging = false;
    let startX;
    let scrollLeft;

    elemento.addEventListener('mousedown', (e) => {
        isDragging = true;
        elemento.classList.add('active');
        startX = e.pageX - elemento.offsetLeft;
        scrollLeft = elemento.scrollLeft;
    });

    elemento.addEventListener('mouseup', () => {
        isDragging = false;
        elemento.classList.remove('active');
    });

    elemento.addEventListener('mouseleave', () => {
        isDragging = false;
        elemento.classList.remove('active');
    });

    elemento.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - elemento.offsetLeft;
        const walk = (x - startX) * 2; // Ajuste a velocidade do arrasto
        elemento.scrollLeft = scrollLeft - walk;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const listaGenero = document.getElementById('listaGenero');
    const listaConsoles = document.getElementById('listaConsoles'); // Adicione outros IDs conforme necessário

    // Configurando a rolagem para os elementos
    configurarRolagemLateral(listaGenero);
    configurarRolagemLateral(listaConsoles);
});




// modal
let abrirModalConfig = document.getElementById('abrir-modalConfig');
let modal = document.getElementById('modalOverlay');
let modal2 = document.getElementById('modalConfig');

// abrir
abrirModalConfig.addEventListener('click', function(){
    modal.style.display = 'flex';
    modal2.style.display = 'block';
})

modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.style.display = 'none';
        modal2.style.display = 'none';
    }
});