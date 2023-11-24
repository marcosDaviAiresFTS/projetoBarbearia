const menuConta = document.getElementById('user-perfil');
const listaContaUsuario = document.getElementById('user-panel');
console.log(listaContaUsuario)


function menuContaClicado() {
    listaContaUsuario.classList.toggle('change-state-user-panel');
    if (listaContaUsuario.classList.contains('change-state-user-panel')){
    } else {
        setTimeout(() => {
            listaContaUsuario.style.padding = '0px';
        }, 300);
    }
}

menuConta.addEventListener('click', () => menuContaClicado())