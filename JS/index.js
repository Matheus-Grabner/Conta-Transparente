// Capturando o campo de texto
let campoTexto = document.getElementById('campoTexto');

// Capturando o botão
let meuBotao = document.getElementById('meuBotao');

// Definindo uma letiável para armazenar o valor bruto
let valorBruto;

// Adicionando um ouvinte de evento ao botão para capturar o valor quando clicado
meuBotao.addEventListener('click', function() {
    // Obtendo o valor digitado no campo de texto
    let valorDigitado = campoTexto.value;
    
    // Verificando se o valor digitado é um número
    if (!isNaN(valorDigitado)) {
        // Armazenando o valor digitado na letiável valorBruto
        valorBruto = parseFloat(valorDigitado);
        console.log('Valor bruto:', valorBruto);
    } else {
        alert('Por favor, insira apenas números.');
    }
});
