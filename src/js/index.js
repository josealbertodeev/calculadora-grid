function adicionarCaracter(numero){
    let display = document.querySelector('.display').value;

    document.querySelector('.display').value = display + numero;

}

function limpaTela(){
    document.querySelector('.display').value = '';
}

function calcular(){
    let valorDisplay = document.querySelector('.display').value;

    document.querySelector('.display').value = eval(valorDisplay);
}

function inverterNumero(){
    let display = document.querySelector('.display').value;

    document.querySelector('.display').value = display * -1;
}