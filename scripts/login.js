import {usuarios} from '../constantes/usuarios.js'

document.getElementById('login').addEventListener("click", Logar);

function Logar() {
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value


    document.getElementById('email').classList.remove("error-email")
    document.getElementById('senha').classList.remove("error-senha")

    if(!email || !senha) {
        alert("Campo obrigatório")
    } else {
        const usuarioEncontrado = usuarios.find((usuario) => usuario.email === email && usuario.senha === senha)

        if(usuarioEncontrado) {
            alert("Login realizado com sucesso. Redirecionando para a home...")
            window.location.href = "reservas.html"
         } else {
             alert ("O usuário não foi encontrado!")
         }

    }

}