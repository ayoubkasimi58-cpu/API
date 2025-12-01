let produits = [
  { nom: "PC portable", prix: 900, image: "https://i.pinimg.com/1200x/0f/c1/d3/0fc1d3925c1dd037f42ba8300e2891b6.jpg" },
  { nom: "Clavier mécanique", prix: 45, image: "https://i.pinimg.com/736x/6d/0f/18/6d0f183f42f0ff5d0d99ecc403befa86.jpg" },
  { nom: "Souris sans fil", prix: 25, image: "https://i.pinimg.com/736x/0e/90/0a/0e900ab9e081abcb26cf47d8d732871c.jpg" }
];

let catalogue = document.getElementById("catalogue");

produits.forEach(p => {
  let carte = document.createElement("div");
  carte.className = "carte";
  carte.innerHTML = `
    <img src="${p.image}" alt="${p.nom}">
    <h3>${p.nom}</h3>
    <p>Prix : ${p.prix} €</p>
  `;
  catalogue.appendChild(carte);
});
