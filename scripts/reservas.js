
let dados_reservas = []

// Eventos para os botões

document.getElementById('logout').addEventListener('click', () => {
    window.location.href = "login.html"
})

document.getElementById('redirecionar-cadastro').addEventListener('click', () => {
    window.location.href = "cadastro.html"
})

// Funções da página

function addLinhas(filteredData) {

const currentData = filteredData?.length > 0 ? filteredData : dados_reservas
    
    currentData.map((reserva) => {
        const tr = document.createElement('tr')
        tr.setAttribute('id', reserva.id)
        
        const td_nquarto = document.createElement('td')
        td_nquarto.innerHTML = reserva.numero_quarto
        tr.appendChild(td_nquarto)

        const td_cliente = document.createElement('td')
        td_cliente.innerHTML = reserva.nome_cliente
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
    fetch(`http://localhost:3000/reservas/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        alert("Reserva deletada com sucesso!")
        document.getElementById(id).remove()
})
    .catch(() => {
        alert("Falha ao deletar a reserva!")
    })
}

function pegarListaReserva() {
    fetch('http://localhost:3000/reservas')
    .then ((response) => {
        if(response.ok === false) {
            throw new Error()
        }
        return response.json()})
    .then((dados) => {
        dados_reservas = dados
        addLinhas()
    })
    .catch((error) => {
        console.log(error)
        alert("Falha no cadastro da reserva!")
    })
}

window.onload = pegarListaReserva

// Desafio

let final_transcript = "";

// Configuração do reconhecimento
let speechRecognition = new webkitSpeechRecognition();
speechRecognition.continuous = true;
speechRecognition.interimResults = true;
speechRecognition.lang = 'pt-BR'

speechRecognition.onresult = (event) => {
    let interim_transcript = "";

    for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
            final_transcript += event.results[i][0].transcript;
        } else {
            interim_transcript += event.results[i][0].transcript;
        }
    }

    if (interim_transcript === 'resetar') {
        document.getElementById('linhas-tabela').innerHTML = ''
        addLinhas(dados_reservas)
    } else {
        let filteredData = dados_reservas.filter(item => item.numero_quarto.toString() === interim_transcript)
        if (filteredData.length > 0) {
            document.getElementById('linhas-tabela').innerHTML = ''
            addLinhas(filteredData)
        }
        interim_transcript = ""
    }
};


let espacoPressionado = false;
let espacoIntervalo;

// Função para ser chamada enquanto a tecla Espaço estiver pressionada
function segurarEspaco() {
    // Implemente o código que deseja executar enquanto a tecla Espaço estiver pressionada
    if (espacoPressionado) {
        speechRecognition.start();
    }
    console.log("Segurando a tecla Espaço...");
}

// Função para lidar com o evento de pressionar uma tecla
function keyDownHandler(event) {
    if (event.keyCode === 32) {
        if (!espacoPressionado) {
            espacoPressionado = true;
            segurarEspaco();
        }
    }
}

// Função para lidar com o evento de liberar uma tecla
function keyUpHandler(event) {
    if (event.keyCode === 32) {
        if (espacoPressionado) {
            espacoPressionado = false;
            speechRecognition.stop();
            clearInterval(espacoIntervalo);
        }
    }
}

// Adiciona os event listeners para os eventos de pressionar e liberar teclas
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);