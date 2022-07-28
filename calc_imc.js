function calcular(){
    var peso = document.getElementById("peso");
    var altura = document.getElementById("altura");
    var sit = ""

    if(peso.value == '' || altura.value == ''){
        window.alert("Preencha todos os campos corretamente!")
    } else{

        var imc = parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value))

        if(imc < 18.5){
            sit = "Abaixo do peso."
        } else if(imc < 24.9) {
            sit = "Peso normal."
        } else if(imc < 29.9) {
            sit = "Sobrepeso."
        } else if(imc < 34.99) {
            sit = "Obesidade grau I."
        } else if(imc < 39.99) {
            sit = "Obesidade grau II (severa)."
        } else {
            sit = "obesidade grau III (mórbida)."
        }

        document.getElementById("tImc").innerHTML = `<p>Você está pesando ${parseFloat(peso.value).toFixed(2)} kg e medindo 
        ${parseFloat(altura.value).toFixed(2)} m.</p>
        <table>
            <tr>
                <th>Seu IMC</th>
                <th>Sua Situação</th>
            </tr>
            <tr>
                <td>${imc.toFixed(2)}</td>
                <td>${sit}</td>
            </tr>
        </table>
        ` 
    }
    peso.value = ''
    altura.value = ''
}