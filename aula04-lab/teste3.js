function buscar(nome, tempo) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(nome), tempo);
    });
}

console.time("Total");
Promise.all([
    buscar("Usuário", 1000),
    buscar("Pedidos", 1500),
    buscar("Pagamentos", 800),
]).then((resultados) => {
    console.log("Resultados: ", resultados);
    console.timeEnd("Total");
});
