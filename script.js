
var texto = document.getElementById("resp")
var num1 = 0
var num2 = 0
var total = 0
var oper = ""


function concatenar(num){

    texto.style.color = 'Black'
    texto.value += num

}

function op(operacao){

    if(num1 == 0){
        num1 = parseFloat(texto.value)
        texto.value = ""
    }
    if (num1 != total && total != 0 ) {
        num1 = parseFloat(texto.value)
        texto.value = ""
    }
    oper = parseInt(operacao)

}

function calc(){

    num2 = parseFloat(texto.value)
    
    switch (oper){

        case 1:
            total = num1 + num2
            texto.style.color = 'Red'
            texto.value = total
        break

        case 2:
            total = num1 - num2
            if (total == 0){
                num1 = 0
            }
            texto.style.color = 'Red'
            texto.value = total
        break
        case 3:
            total = num1 * num2
            texto.style.color = 'Red'
            texto.value = total
        break
        case 4:
            total = num1 / num2
            texto.style.color = 'Red'
            texto.value = total
            
        break
        default:
            texto.style.color = 'Red'
            texto.value = "Error"
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