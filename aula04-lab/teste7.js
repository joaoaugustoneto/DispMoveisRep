function processarItem(item) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Processando item: ${item}`);
            resolve();
        }, 500);
    });
}

async function processarTodos(lista) {
    for (const item of lista) {
        await processarItem(item);
    }
    console.log("Todos os itens foram processados.");
}

processarTodos(["Item 1", "Item 2", "Item 3"]);q   