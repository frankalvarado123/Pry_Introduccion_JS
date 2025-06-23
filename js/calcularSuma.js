function calcular_suma() {
    let n1 = document.getElementById("txt_numero_1").value;
    let n2 = document.getElementById("txt_numero_2").value;
    let suma = parseFloat(n1) + parseFloat(n2);
    document.getElementById("resultado_suma").value = suma;
}

function calcular_resta() {
    let n1 = document.getElementById("txt_numero_3").value;
    let n2 = document.getElementById("txt_numero_4").value;
    let resta = parseFloat(n1) - parseFloat(n2);
    document.getElementById("resultado_resta").value = resta;
}

function calcular_multiplicacion() {
    let n1 = document.getElementById("txt_numero_5").value;
    let n2 = document.getElementById("txt_numero_6").value;
    let multiplicacion = parseFloat(n1) * parseFloat(n2);
    document.getElementById("resultado_multiplicacion").value = multiplicacion;
}

function calcular_division() {
    let n1 = document.getElementById("txt_numero_7").value;
    let n2 = document.getElementById("txt_numero_8").value;
    if (parseFloat(n2) === 0) {
        document.getElementById("resultado_division").value = "No se puede dividir por 0";
    } else {
        let division = parseFloat(n1) / parseFloat(n2);
        document.getElementById("resultado_division").value = division;
    }
}