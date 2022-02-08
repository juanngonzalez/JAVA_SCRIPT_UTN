const mayor = () => {
    const numeros = [2,4,56,89,500,234,56];
    var maximo = 0;
    for(var i=0; i < numeros.length; i++){
        if (numeros[i] > maximo){
            var maximo = numeros[i]
        }    
    }
    document.write(`El numero mas grande es ${maximo}`)
}  
mayor()