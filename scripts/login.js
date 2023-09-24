import {usuarios} from '../constantes/usuarios.js'

document.getElementById('login').addEventListener("click", Logar);

function Logar() {
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value


    document.getElementById('email').classList.remove("error-email")
    document.getElementById('senha').classList.remove("error-senha")

    if (email === ''){
        document.getElementById('email').classList.add("input-error")
        document.getElementById('email').focus()

    } else if (senha === '') {
        document.getElementById('senha').classList.add("input-error")
        document.getElementById('email').focus()

    } else {
        document.getElementById('login').disabled = false
        document.getElementById('login').style.opacity = 1
        document.getElementById('login').innerText = "Entrar"

    const usuarioEncontrado = usuarios.find((usuario) => usuario.email === email && usuario.senha === senha)

    if(usuarioEncontrado) {
       window.location.ref = './home.html';
    } else {
        alert ("O usuário não foi encontrado!")
    }
}
}