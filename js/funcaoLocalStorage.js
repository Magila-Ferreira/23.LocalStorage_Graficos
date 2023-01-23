/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
// Função recebe o texto "Dados" como parâmetro e verifica se há localStorage
function ler(chave){
    // Se houver, pega o conteúdo da chave_Dados e converte em um objeto array[Dados], retornando-o a chamada da função 
    if(window.localStorage){
        return JSON.parse(localStorage.getItem(chave));
    }
    else{
        // Se não houver localStorage, reporta uma mensagem de alerta
        alert("LocalStorage não suportado.");
    }
}

// Função gravar, recebe os parâmetros de nome_da_chave e valor_da_chave: objeto vendas
function gravar (chave, valor){
    
    // Verifica se há localStorage
    if(window.localStorage){
        // Atribui o nome_chave e seu valor ao localStorage, transformando-o em String
        localStorage.setItem(chave, JSON.stringify( valor));
    }
    else{
        // Dispara uma alerta, caso o localStorage não seja disponível no navegador
        Alert("LocalStorage não suportado.");
    }
}
