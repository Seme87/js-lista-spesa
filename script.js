// CREARE UNA LISTA CON GLI ALIMENTI DA COMPRARE
const shoppingList = [
    'Panini',  
    'Acqua',
    'Latte',
    'Uova',
    'Pesce',
    'Caffe',
    'Croccantini Otto',
    'Detersivo dei Piatti',
    'Riso integrale',
    'Pollo'
]

// DICHIARARE VARIABILE DEL CONTATORE PER LA LISTA
let i = 0;

// DICHIARARE VARIABILE DEL CONTENITORE DEGLI ELEMENTI
const container = document.querySelector(".items")

// CREARE CICLO WHILE PER IMPOSTARE I VARI COMPONENTI DELLA LISTA
while(i < shoppingList.length){

    // CREO UN ELEMETO LI IN JS
    const element = document.createElement("li");

    // SCRIVO L ALIMENTO IN ELEMENT
    element.innerHTML = shoppingList[i];

    //STAMPA L'ELEMENTO ALL'INTERNO DEL SUO CONTAINER
    container.append(element);
    i++
    
}