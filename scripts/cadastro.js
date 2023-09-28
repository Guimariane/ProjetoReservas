document.getElementById.add('cadastro-reserva').addEventListener('submit', cadastrarReserva)

const num_quarto = document.getElementById('nquarto')
const nome_cliente = document.getElementById('nome')
const cpf = document.getElementById('cpf')
const data_entrada = document.getElementById('dataentrada')
const data_saida = document.getElementById('datasaida')




function cadastrarReserva(event) {
    event.preventDefault()

    const numero_quarto = num_quarto.value
    const n_cliente = nome_cliente.value
    const cpf_cliente = cpf.value
    const data_inicio = data_entrada.value
    const data_fim = data_saida.value

    if(!numero_quarto || !n_cliente || !cpf_cliente || !data_inicio || !data_fim) {
        alert("Preencha os dados da reserva!")
    } else {
        
    }

}