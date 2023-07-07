
var texto = document.getElementById("resp")
var num1 = 0
var num2 = 0
var total = 0
var oper = ""


function concatenar(num){
    texto.value += num

}

function op(operacao){
    num1 = parseFloat(texto.value)
    console.log(num1)
    texto.value = ""
    oper = parseInt(operacao)
    console.log(oper)
    
}

function calc(){
    num2 = parseFloat(texto.value)
    
    switch (oper){

        case 1:
            total = num1 + num2
            console.log(total)
            texto.value = total
        break

        case 2:
            total = num1 - num2
            console.log(total)
            texto.value = total
        break
        case 3:
            total = num1 * num2
            console.log(total)
            texto.value = total
        break
        case 4:
            total = num1 / num2
            console.log(total)
            texto.value = total
        break
    }
    
}

function apagar(){
    texto.value = ''
    num1 = 0
    num2 = 0
    total = 0
    oper = 0
}