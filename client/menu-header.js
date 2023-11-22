const menuConta = document.getElementById('menu_conta');
const listaContaUsuario = document.getElementById('menu_conta_usuario');


function menuContaClicado() {
    listaContaUsuario.classList.toggle('menu_clicado');
    if (listaContaUsuario.classList.contains('menu_clicado')){
        listaContaUsuario.style.padding = '15px 0px'
    } else {
        setTimeout(() => {
            listaContaUsuario.style.padding = '0px';
        }, 100);
    }
}

menuConta.addEventListener('click', () => menuContaClicado())