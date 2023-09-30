// Evento para o botão da página
document.getElementById('cadastro-reserva').addEventListener('submit', cadastrarReserva)

// Variáveis para serem usadas no fetch na função abaixo
const num_quarto = document.getElementById('nquarto')
const nome_cliente = document.getElementById('nome')
const cpf = document.getElementById('cpf')
const data_entrada = document.getElementById('dataentrada')
const data_saida = document.getElementById('datasaida')

// Função de cadastro da reserva
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
        fetch('http://localhost:3000/reservas', {
            method: 'POST',
            body: JSON.stringify({
                numero_quarto: numero_quarto,
                nome_cliente: n_cliente,
                cpf: cpf_cliente,
                data_entrada: data_inicio,
                data_saida: data_fim
            }),
            headers: {
                'Accept': 'applicantion/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (response.ok === false) {
                    throw new Error()
                }
                return response.json()
            })
            .then(() => {
                alert('Cadastrado com sucesso')

                num_quarto.value = ""
                nome_cliente.value = ""
                cpf.value = ""
                data_entrada.value = ""
                data_saida.value = ""

                window.location.href = "reservas.html"
            })
            .catch((error) => {
                console.log(error)
                alert("Falha ao tentar cadastrar a reserva")
            })
    }
}