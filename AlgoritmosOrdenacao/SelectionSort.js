
function SelectionSort(lista){
    let size = lista.length;
    
    for(let i = 0; i < size-1; i++){
        for(let j = i+1; j < size; j++){
            if(lista[j] < lista[i]){
                [lista[i], lista[j]] = [lista[j], lista[i]]
            };
        };
    };
        console.log(lista);
};

let listaDesordenada = [];
for (let i = 0; i < 100; i++ ){
    listaDesordenada.push(Math.floor(Math.random()*100) + 1);
}
console.log(listaDesordenada)
SelectionSort(listaDesordenada)