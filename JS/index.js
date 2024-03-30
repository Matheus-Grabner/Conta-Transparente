// Entrada de dados (valor bruto)
// Definindo uma variável para armazenar o valor bruto
let valorBruto;

// Capturando o campo de texto
let campoTexto = document.getElementById('campoTexto');

// Capturando o botão
let meuBotao = document.getElementById('meuBotao');

// Capturando o elemento de mensagem
let mensagemElemento = document.getElementById("mensagem");

// Adicionando um ouvinte de evento keyup para formatar o valor conforme necessário
campoTexto.addEventListener('keyup', function(event) {
    // Obtendo o valor digitado no campo de texto
    let valorDigitado = campoTexto.value;

    // Removendo todos os caracteres não numéricos, exceto pontos (.) e vírgulas (,)
    let valorNumerico = valorDigitado.replace(/[^\d.,]/g, '');

    // Removendo múltiplos pontos (.) e vírgulas (,) seguidos
    valorNumerico = valorNumerico.replace(/([.,])\1+/g, '$1');

    // Substituindo vírgulas por pontos, se necessário, para garantir a formatação numérica correta
    valorNumerico = valorNumerico.replace(',', '.');

    // Adicionando vírgulas como separadores de milhares
    let partes = valorNumerico.split('.');
    let parteInteira = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    let valorFormatado = partes.length > 1 ? parteInteira + '.' + partes[1] : parteInteira;

    // Atualizando o valor no campo de texto
    campoTexto.value = valorFormatado;
});

// Função para lidar com o clique no botão
function enviaValorBruto() {
    // Obtendo o valor digitado no campo de texto
    let valorDigitado = campoTexto.value;
    
    if (/^\d+$/.test(valorDigitado)) {
        // Armazenando o valor digitado na variável valorBruto
        let valorBruto = parseFloat(valorDigitado);
        // Limpando a mensagem de erro
        mensagemElemento.textContent = "";
    } else {
        // Se o valor for inválido, exibir mensagem de erro
        mensagemElemento.textContent = "* Por favor, digite apenas números!";
    }
    console.log(valorBruto)
}

// Adicionando um ouvinte de evento ao botão para chamar a função handleClick quando clicado
meuBotao.addEventListener('click', enviaValorBruto);

document.getElementById("meuBotao").addEventListener("click", function() {
    var valorBruto = parseFloat(document.getElementById("campoTexto").value);
});