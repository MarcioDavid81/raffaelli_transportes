const botaoAbrir = document.querySelector('[data-modal="abrir"]');
const botaoFechar = document.querySelector('[data-modal="fechar"]');
const containerModal = document.querySelector('[data-modal="container"]');
const botaoEnviar = document.querySelector('[data-modal="enviar"]');

if(botaoAbrir && botaoFechar && containerModal){
    function abrirModal(event){
        event.preventDefault();
        containerModal.classList.add('ativo');
    }

    function fecharModal(){
        containerModal.classList.remove('ativo');
    }

    function cliqueForaModal(event){
        if(event.target === this){
            fecharModal();
        }
    }

    botaoAbrir.addEventListener('click', abrirModal);
    botaoFechar.addEventListener('click', fecharModal);
    containerModal.addEventListener('click', cliqueForaModal);
    botaoEnviar.addEventListener('click', fecharModal);
}