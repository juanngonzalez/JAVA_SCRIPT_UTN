const determinarTransporte = () => {
    var distancia = 110000;
    var transporte = "";

    if (distancia === 0 && distancia < 1000) {
        transporte = "pie"
    } else if (distancia > 1001 && distancia <= 10000) {
        transporte = "bicicleta"
    } else if (distancia > 10001 && distancia <= 30000) {
        transporte = "colectivo"
    } else if (distancia > 30001 && distancia <= 100000) {
        transporte = "auto"
    } else if (distancia > 100001) {
        transporte = "avion"
    };
    document.write(`El transporte recomendado es ${transporte}`);
}

determinarTransporte();