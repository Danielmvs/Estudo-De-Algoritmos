function insertionSort ( lista){
    let size = lista.length;
    for( let i = 1; i < size; i++){
        let current = lista[i];
        let j = i - 1;
        while(( j >= 0) && (current < lista[j] )){
            lista[ j+1] = lista [j];
            j--;
        }
        lista[j + 1] = current;
    };
    console.log(lista);
};

let list = [2,8,9,1,0,5]
insertionSort(list);
