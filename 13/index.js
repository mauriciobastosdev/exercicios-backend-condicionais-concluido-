//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento == "credito") {
    const valorFinal = (valorDoProduto - (valorDoProduto * 0.05)).toFixed(2);
    console.log(`Valor a pagar é R$ ${valorFinal}`);
} else if (tipoDePagamento == "cheque") {
    const valorFinal = (valorDoProduto - (valorDoProduto * 0.03)).toFixed(2);
    console.log(`Valor a pagar é R$ ${valorFinal}`);
} else if (tipoDePagamento == "dinheiro" || "debito") {
    const valorFinal = (valorDoProduto - (valorDoProduto * 0.1)).toFixed(2);
    console.log(`Valor a pagar é R$ ${valorFinal}`);
}