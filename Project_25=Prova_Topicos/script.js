const saldo = document.getElementById("saldo");
const deposito = document.getElementById("deposito");

saldo.innerHTML = '0';
let contador=0;
let valorSaldo=0;

function digitando(valor){

    if(contador == 3)
    {
        Swal.fire(
            'O valor maximo de deposito é R$999!'
        )
    }else if(contador == 0){
        contador++;
        valorSaldo = valorSaldo + valor;
        valorSaldo = parseInt(valorSaldo);
        deposito.innerHTML = valorSaldo;
    }
    else
    {
        contador++;
        valorSaldo = valorSaldo + valor;
        valorSaldo = parseInt(valorSaldo);
        deposito.innerHTML = valorSaldo;
    }

   
}

function confirma(){
    valorSaldo = parseInt(valorSaldo);
    saldo.innerHTML = valorSaldo;
    deposito.innerHTML = '';
    contador = 0
    valorSaldo = 0;
}
function cancela(){
    deposito.innerHTML = '';
    contador = 0
    valorSaldo = 0;
}
function retirarDinheiro(){
    saldo.innerHTML = '0';
    deposito.innerHTML = '';
    contador = 0
    valorSaldo = 0;
}

const quantidadeProduto = document.getElementById("quantidadeProduto");
quantidadeProduto.innerHTML = '0';
let contador2=0;

function adicionar(){  
    if(produtoEscolhido == false){
        Swal.fire(
            'Escolha um produto antes!'
        )
    }else{
    contador2 ++;
    quantidadeProduto.innerHTML = contador2;}
}

function sub(){
    if(produtoEscolhido == false){
        Swal.fire(
            'Escolha um produto antes!'
        )
    }
    else if(contador2 <= 0){

    }else{
        contador2 --;
        quantidadeProduto.innerHTML = contador2;
    }
}

const produtoSelecionado = document.getElementById("produtoSelecionado");
produtoSelecionado.innerHTML = '?';
produtoEscolhido = false;
produtoAtual=0;

function produto1(){
    if(saldo.innerHTML == '0'){
        Swal.fire(
            'Deposite seu saldo antes!'
        )
    }else{
    produtoSelecionado.innerHTML = 'Barra de Chocolate';
    produtoEscolhido = true;
    quantidadeProduto.innerHTML = '0';
    contador2=0;
    produtoAtual=1;
    }
}
function produto2(){
    if(saldo.innerHTML == '0'){
        Swal.fire(
            'Deposite seu saldo antes!'
        )
    }else{
    produtoSelecionado.innerHTML = 'Salgadinho';
    produtoEscolhido = true;
    quantidadeProduto.innerHTML = '0';
    contador2=0;
    produtoAtual=2;
    }
}
function produto3(){
    if(saldo.innerHTML == '0'){
        Swal.fire(
            'Deposite seu saldo antes!'
        )
    }else{
    produtoSelecionado.innerHTML = 'Refrigerante';
    produtoEscolhido = true;
    quantidadeProduto.innerHTML = '0';
    contador2=0;
    produtoAtual=3;
    }
}
function produto4(){
    if(saldo.innerHTML == '0'){
        Swal.fire(
            'Deposite seu saldo antes!'
        )
    }else{
    produtoSelecionado.innerHTML = 'Bolacha/Biscoito';
    produtoEscolhido = true;
    quantidadeProduto.innerHTML = '0';
    contador2=0;
    produtoAtual=4;
    }
}
function produto5(){
    if(saldo.innerHTML == '0'){
        Swal.fire(
            'Deposite seu saldo antes!'
        )
    }else{
    produtoSelecionado.innerHTML = 'Kinder Ovo';
    produtoEscolhido = true;
    quantidadeProduto.innerHTML = '0';
    contador2=0;
    produtoAtual=5;
    }
}

const estoque1 = document.getElementById("estoque1");
const estoque2 = document.getElementById("estoque2");
const estoque3 = document.getElementById("estoque3");
const estoque4 = document.getElementById("estoque4");
const estoque5 = document.getElementById("estoque5");
produtoestoque1 = 10;
produtoestoque2 = 9;
produtoestoque3 = 12;
produtoestoque4 = 6;
produtoestoque5 = 4;
estoque1.innerHTML = produtoestoque1;
estoque2.innerHTML = produtoestoque2;
estoque3.innerHTML = produtoestoque3;
estoque4.innerHTML = produtoestoque4;
estoque5.innerHTML = produtoestoque5;

function comprar(){
    if(produtoEscolhido == false){
        Swal.fire(
            'Escolha um produto e sua quantidade antes!'
        )
    }else if(contador2 == 0){
        Swal.fire(
            'Selecione a quantidade do produto antes!'
        )

    }else if(produtoAtual == 1){
        let quantidade = parseInt(quantidadeProduto.innerHTML);
        if(quantidade > produtoestoque1){
            Swal.fire(
                'Infelizmente não temos essa quantidade no estoque!'
            )
        }else{
            let preco = 5 * quantidade;
            let saldoDisbonivel = parseInt(saldo.innerHTML);

            let novoSaldo = saldoDisbonivel - preco;
            if(novoSaldo >= 0 ){
                saldo.innerHTML = novoSaldo;
                produtoestoque1 = produtoestoque1 - quantidade;
                estoque1.innerHTML = produtoestoque1;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Compra realizada com sucesso',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }else {
                Swal.fire(
                    'Saldo insuficiente para a combra!'
                )
            }
        }
    }else if(produtoAtual == 2){
        let quantidade = parseInt(quantidadeProduto.innerHTML);
        if(quantidade > produtoestoque2){
            Swal.fire(
                'Infelizmente não temos essa quantidade no estoque!'
            )
        }else{
            let preco = 7 * quantidade;
            let saldoDisbonivel = parseInt(saldo.innerHTML);

            let novoSaldo = saldoDisbonivel - preco;
            if(novoSaldo >= 0 ){
            saldo.innerHTML = novoSaldo;
            produtoestoque2 = produtoestoque2 - quantidade;
            estoque2.innerHTML = produtoestoque2;
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Compra realizada com sucesso',
                showConfirmButton: false,
                timer: 1500
              })
            }else {
                Swal.fire(
                    'Saldo insuficiente para a combra!'
                )
            }
        }
    }else if(produtoAtual == 3){
        let quantidade = parseInt(quantidadeProduto.innerHTML);
        if(quantidade > produtoestoque3){
            Swal.fire(
                'Infelizmente não temos essa quantidade no estoque!'
            )
        }else{
            let preco = 4 * quantidade;
            let saldoDisbonivel = parseInt(saldo.innerHTML);

            let novoSaldo = saldoDisbonivel - preco;

            if(novoSaldo >= 0 ){
            saldo.innerHTML = novoSaldo;
            produtoestoque3 = produtoestoque3 - quantidade;
            estoque3.innerHTML = produtoestoque3;
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Compra realizada com sucesso',
                showConfirmButton: false,
                timer: 1500
              })
            }else {
                Swal.fire(
                    'Saldo insuficiente para a combra!'
                )
            }
        }
    }else if(produtoAtual == 4){
        let quantidade = parseInt(quantidadeProduto.innerHTML);
        if(quantidade > produtoestoque4){
            Swal.fire(
                'Infelizmente não temos essa quantidade no estoque!'
            )
        }else{
            let preco = 3 * quantidade;
            let saldoDisbonivel = parseInt(saldo.innerHTML);

            let novoSaldo = saldoDisbonivel - preco;
            if(novoSaldo >= 0 ){
            saldo.innerHTML = novoSaldo;
            produtoestoque4 = produtoestoque4 - quantidade;
            estoque4.innerHTML = produtoestoque4;
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Compra realizada com sucesso',
                showConfirmButton: false,
                timer: 1500
              })
            }else {
                Swal.fire(
                    'Saldo insuficiente para a combra!'
                )
            }
        }
    }else if(produtoAtual == 5){
        let quantidade = parseInt(quantidadeProduto.innerHTML);
        if(quantidade > produtoestoque5){
            Swal.fire(
                'Infelizmente não temos essa quantidade no estoque!'
            )
        }else{
            let preco = 7 * quantidade;
            let saldoDisbonivel = parseInt(saldo.innerHTML);

            let novoSaldo = saldoDisbonivel - preco;
            if(novoSaldo >= 0 ){
            saldo.innerHTML = novoSaldo;
            produtoestoque5 = produtoestoque5 - quantidade;
            estoque5.innerHTML = produtoestoque5;
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Compra realizada com sucesso',
                showConfirmButton: false,
                timer: 1500
              }) }else {
                Swal.fire(
                    'Saldo insuficiente para a combra!'
                )
            }
        }
    }
}