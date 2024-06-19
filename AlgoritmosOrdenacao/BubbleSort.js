function bubbleSort(lista){
    let size = lista.length;
    for(let i= 0; i < size; i++){
        for(let j = 0; j < size - i - 1; j ++)
            if(lista[j+1]  < lista[j] ){
                [lista [j], lista[j+1]] = [lista[j+1], lista[j]]
            };
    };
console.log(lista)
};
//programa teste do algoritmo
let listaDesordenada = [];
for (let i = 0; i < 100; i++ ){
    listaDesordenada.push(Math.floor(Math.random()*100) + 1);
}
console.log(listaDesordenada)
bubbleSort(listaDesordenada)            
