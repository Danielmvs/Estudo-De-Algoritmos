function mergeSort(lista, inicio=0, fim=null){
    fim = fim === null ? lista.length : fim;
    if(fim - inicio > 1){
        let meio = Math.ceil((inicio + fim)/2);
        mergeSort(lista, inicio, meio);
        mergeSort(lista, meio, fim);
        listaOrdenada = merge(lista, inicio, meio, fim);
    }
    return listaDesordenada

};

function merge(lista, inicio, meio, fim){
    let left = lista.slice(inicio, meio)
    let rigth = lista.slice(meio, fim)
    let l = 0, r = 0

    for(let k = inicio; k < fim; k++){
        if(l >= left.length){
            lista[k] = rigth[r];
            r++;
        }else if(r >= rigth.length){
            lista[k] = left[l];
            l++;
        }else if(left[l] < rigth[r]){
            lista[k] = left[l];
            l++;
        }else{
            lista[k] = rigth[r];
            r++;
        }

    }
    return lista
}

let listaDesordenada = [];
for (let i = 0; i < 100; i++ ){
    listaDesordenada.push(Math.floor(Math.random()*100) + 1);
}
console.log(listaDesordenada);
console.log(mergeSort(listaDesordenada));