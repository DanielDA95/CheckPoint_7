function numeros(a, b, c, d) {
    const suma1 = a + b;
    const suma2 = c + d;
    const resultado = suma1 * suma2;
    if (resultado > 50) {
        console.log("¡El número es mayor que 50!");
    } else {
        console.log("¡El número es menor que 50!");
    }
}

numeros(9, 22, 5, 3);
