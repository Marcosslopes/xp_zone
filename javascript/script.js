let abrirModal = document.getElementById('abrir-modal');
let fecharModal = document.getElementById('fechar-modal');
let modal = document.getElementById('modal');

// abrir
abrirModal.addEventListener('click', function(){
    modal.style.display = 'block';
})

// fechar
fecharModal.addEventListener('click', function(){
    modal.style.display = 'none';
})