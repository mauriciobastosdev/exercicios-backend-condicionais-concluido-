//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;
const valorDaParcela = (valorDoProduto / quantidadeDoParcelamento / 100).toFixed(2);
const parcelasRestante = ((valorDoProduto / 100) - valorPago) / valorDaParcela;
console.log(`Restam ${parcelasRestante} parcelas de R$ ${valorDaParcela}`)