function calcularImc(event) {
    event.preventDefault(); //serve para que os dados nao sumam apos o resultado e fique na tela

    function LimparCampos(event){
    /* Limpar os dados antigos  */
    document.getElementById("peso").value ="";
    document.getElementById("altura").value ="";
    document.getElementById("resultado").value ="";
    }
    var resultadoElement = document.getElementById("resultado");
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    if (peso.includes(',') || altura.includes(',')) {
        alert("Por favor, use um ponto (.) em vez de uma vírgula (,) para números decimais.");
        return;
    }

    peso = parseFloat(peso);
    altura = parseFloat(altura);

    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
        var imc = peso/(altura*altura);
        var resultado = "";

        if (imc < 18.5) {
            resultado = 'Abaixo do peso';
            resultadoElement.style.color = 'magenta';
        } else if (imc >= 18.5 && imc < 25) {
            resultado = 'Peso normal';
            resultadoElement.style.color = 'green';
        } else if (imc >= 25 && imc < 30) {
            resultado = 'Acima do peso';
            resultadoElement.style.color = 'orange';
            
        } else if (imc >= 30 && imc <= 40) {
            resultado = 'Obeso';
            resultadoElement.style.color='red';
        } else {
            resultado = 'Obesidade grave';
        }
        document.getElementById("resultado").innerHTML =
            "Seu imc é de " + imc.toFixed(2) + "<br>" + resultado;
            console.log(imc);
    } else {
        alert("por favor insira valores validos");
    }
}
