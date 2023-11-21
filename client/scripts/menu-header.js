const menuConta = document.getElementById('menu_conta');
const listaContaUsuario = document.getElementById('menu_conta_usuario');


function menuContaClicado(){
    listaContaUsuario.classList.toggle('menu_clicado');
}

menuConta.addEventListener('click', () => menuContaClicado())