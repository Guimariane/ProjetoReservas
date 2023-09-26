import { reservas } from '../constantes/inforeservas.js'

let dados_reservas = [...reservas]

document.getElementById('logout').addEventListener('click', () => {
    window.location.href = "login.html"
})

function addLinhas() {

    reservas.map((reserva) => {
        const tr = document.createElement('tr')
        
        const td_nquarto = document.createElement('td')
        td_nquarto.innerHTML = reserva.n_quarto
        tr.appendChild(td_nquarto)

        const td_cliente = document.createElement('td')
        td_cliente.innerHTML = reserva.cliente
        tr.appendChild(td_cliente)

        const td_cpf = document.createElement('td')
        td_cpf.innerHTML = reserva.cpf
        tr.appendChild(td_cpf)

        const td_periodo = document.createElement('td')
        td_periodo.innerHTML = reserva.data_entrada + ' - ' + reserva.data_saida
        tr.appendChild(td_periodo)

        const td_acoes = document.createElement('td')
        const deletar = document.createElement('button')
        deletar.innerText = 'Deletar'
        deletar.addEventListener('click', () => deletarReserva(reserva.id))
        td_acoes.appendChild(deletar)
        tr.appendChild(td_acoes)


        document.getElementById('linhas-tabela').appendChild(tr)

})
}

function deletarReserva (id) {
    const restantes = dados_reservas.filter(item => item.id !== id)
    console.log(restantes)
    document.getElementById('linhas-tabela').innerHTML = ""
    dados_reservas = restantes

      restantes.map((reserva) => {
       const tr = document.createElement('tr')
        
       const td_nquarto = document.createElement('td')
       td_nquarto.innerHTML = reserva.n_quarto
       tr.appendChild(td_nquarto)

       const td_cliente = document.createElement('td')
       td_cliente.innerHTML = reserva.cliente
       tr.appendChild(td_cliente)

       const td_cpf = document.createElement('td')
       td_cpf.innerHTML = reserva.cpf
       tr.appendChild(td_cpf)

       const td_periodo = document.createElement('td')
       td_periodo.innerHTML = reserva.data_entrada + ' - ' + reserva.data_saida
       tr.appendChild(td_periodo)

       const td_acoes = document.createElement('td')
       const deletar = document.createElement('button')
       deletar.innerText = 'Deletar'
       deletar.addEventListener('click', () => deletarReserva(reserva.id))
       td_acoes.appendChild(deletar)
       tr.appendChild(td_acoes)


       document.getElementById('linhas-tabela').appendChild(tr)
}

)
}

window.onload = addLinhas