const reservas = []

function addLinhas() {

    reservas.map(reserva => {
        return {
            ...reserva,
            
        }
    })

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
        td_periodo.innerHTML = reserva.periodo
        tr.appendChild(td_periodo)

        document.getElementById('linhas-tabela').appendChild(tr)

})
}

window.onload = addLinhas