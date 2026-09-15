// 1- Calculadora simples:



// 2- Maior entre três números:



// 3- Desconto em compras

function aplicarDesconto (precoOriginal, percentualDesconto) {
    const valorDesconto = precoOriginal * (percentualDesconto / 100);
    const precoFinal = precoOriginal - valorDesconto;
    return precoFinal;
}

const precoComDesconto = aplicarDesconto(200, 15);
console.log(precoComDesconto)


// 4- Sistema de login simples:

const usuario = "admin" 
const senha = "1234"

if (usuario == "admin" && senha == "1234") {
    console.log("Login bem-sucedido.")
}

else {
    console.log("Acesso negado.")
}

