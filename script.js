function calcular() {
    // Obtener los valores ingresados por el usuario
    const meridianoPlano = parseFloat(document.getElementById('meridianoPlano').value);
    const meridianoCurvo = parseFloat(document.getElementById('meridianoCurvo').value);
    let ejeMasPlano = parseInt(document.getElementById('ejeMasPlano').value);

    // Validar si los campos están vacíos o no son válidos
    if (isNaN(meridianoPlano) || isNaN(meridianoCurvo) || isNaN(ejeMasPlano)) {
        alert("Por favor, ingrese valores válidos en todos los campos.");
        return;
    }

    // Calcular la cantidad que le falta al meridiano plano para igualar al meridiano curvo
    const AK = meridianoCurvo - meridianoPlano;

    // Calcular OD, AC y AT según las fórmulas proporcionadas
    const OD = (meridianoPlano / meridianoCurvo) * ejeMasPlano;
    const AC = 0.75 * 90;
    const AC_V1 = 0.75;
    const AC_V2 = 90;
    let AT;

    // Verificar si AK y AC son iguales
    if (AK === AC_V1) {
        AT = "Neutro";

    } else {
        AT = parseFloat(AK - AC_V1);
    }

    if (ejeMasPlano === AC_V2){
        AT = parseFloat(AK + AC_V1)
    }

    // Construir el procedimiento
    let procedimiento = ``;
    procedimiento += `OD = ${meridianoPlano.toFixed(2)} / ${meridianoCurvo.toFixed(2)} x ${ejeMasPlano}°\n`;
    procedimiento += `AK = ${AK.toFixed(2)} x ${ejeMasPlano}°\n`;
    procedimiento += `AC = 0.75 x 90°\n`;
    procedimiento += `AT = `;

    if (AT === "Neutro") {
        procedimiento += `Neutro`;
    } else {
        procedimiento += `${AT} x ${ejeMasPlano}°`;
    }

    procedimiento += `\n`;

    

    // Mostrar los resultados y el procedimiento en la pantalla
    const resultado = `Resultados:\n${procedimiento}`;
    document.getElementById('resultado').textContent = resultado;
}


 // let procedimiento;
    // if (AT === "Neutro") {
    //     procedimiento = `OD = ${meridianoPlano.toFixed(2)} / ${meridianoCurvo.toFixed(2)} x ${ejeMasPlano}°\nAK = ${AK.toFixed(2)} x ${ejeMasPlano}°\nAC = 0.75 x 90°\nAT = ${AT}`;
    // } else {
    //     procedimiento = `OD = ${meridianoPlano.toFixed(2)} / ${meridianoCurvo.toFixed(2)} x ${ejeMasPlano}°\nAK = ${AK.toFixed(2)} x ${ejeMasPlano}°\nAC = 0.75 x 90°\nAT = ${AT} x  ${ejeMasPlano}°`;
    // }
    // const procedimiento = `OD = ${meridianoPlano.toFixed(2)} / ${meridianoCurvo.toFixed(2)} x ${ejeMasPlano}°\nAK = ${AK.toFixed(2)} x ${ejeMasPlano}°\nAC = 0.75 x 90°\nAT = ${AT} x  ${ejeMasPlano}°`;


