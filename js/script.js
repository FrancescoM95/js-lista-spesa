console.log('JS OK');

// Array con lista della spesa inventata
const listaSpesa = ["Pasta", "Latte", "Uova", "Sale", "Mele", "Biscotti", "Farina", "Caffè"];

// Recupero l'elemento 'ul' HTML
const list = document.getElementById("lista");

// Indice per il ciclo while
let i = 0;

// Ciclo while per stampare gli elementi della lista
while (i < listaSpesa.length) {
    // Creiamo un 'li' per ogni elemento della lista e lo aggiungiamo alla 'ul'
    const listItem = document.createElement("li");
    listItem.textContent = listaSpesa[i];
    list.appendChild(listItem);

    // Incrementiamo l'indice
    i++;
}