// Verificações no programa, que são utilizadas para assegurar que tudo ocorra da forma esperada

let arr = [1, 2, 3, 4, 5, 6,];
let arr2 = [1,2];

function iterarArray(arr) {
    if(arr.length == 0) {
        throw new Error("O array precisa ter pelo menso um elemento");
    } else {
        for(let i = 0; i < arr.length; i++) {
            console.log(i);
        }
    }
}

iterarArray(arr);
iterarArray(arr2);

function arrayVazio(arr) {
    if(arr.length > 0) {
        throw new Error("O array tem que ser igual a zero");
    } else {
        console.log("Agora deu certo");
    }
}

arrayVazio(arr);
arrayVazio(arra2);