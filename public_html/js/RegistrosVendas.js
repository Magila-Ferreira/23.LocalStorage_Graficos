/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

// 1o. recuperar as informaçoes do LocalStorage para determinar o
// conteúdo da matriz com os dados de vendas

// Variável que linca o botão do HTML com as funções do Script
var botao = document.getElementById("botao");

// Variável vendas chama a função ler, passando o texto "Dados" como parâmetro e salva seu retorno
var vendas = ler("Dados");

// Verifica se o retorno de vendas é nulo, se for, atribui um array a vendas
if (vendas === null){
    vendas = [];
}

// Chama o evento_salvar ao click do botão salvar
botao.addEventListener("click", salvar);

// Função salvar 
function salvar(){
    // Cria as variáveis para armazenar o conteúdo das input
    var nome, mes, valor;
    // Cria variável para armazenar um objeto_registro de "Dados" 
    var umRegistro;
    
    // Atribui o valor das input as variáveis
    nome = document.getElementById("txtNome").value;
    mes = document.getElementById("txtMes").value;
    valor = document.getElementById("txtValor").value;
    
    // Armazena as variáveis do input a um objeto registro  
    umRegistro = [nome,mes,valor];
    
    // Empurra um novo objeto_registro à variável vendas  
    vendas.push(umRegistro);
    
    // Chama a função gravar, passando a chave "Dados" e seu valor (variável_vendas), por parâmetro
    gravar("Dados",vendas);
    
    //alert(vendas);
    limpar();
}

function limpar(){
    document.getElementById("txtNome").value = "";
    document.getElementById("txtMes").value ="";
    document.getElementById("txtValor").value = "";
}

