function tarefa(nome, tempo) {
    return new Promise((r) => setTimeout(() => r(nome), tempo));
}

async function sequencial() {
    console.time("sequencial");
    await tarefa("A", 1000);
    await tarefa("B", 1000);
    console.timeEnd("sequencial");//tempo de execução ~2000ms
} 

async function paralelo() {
    console.time("paralelo");
    await Promise.all([tarefa("A", 1000), tarefa("B",1000)]);
    console.timeEnd("paralelo"); //tempo de execução ~1000ms
}

sequencial().then(paralelo());