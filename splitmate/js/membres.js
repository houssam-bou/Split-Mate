import { groups , membres} from "./ui.js"
export let membres = [
    {
        id: 25,
        groupeId: 5,
        nomMembre: "houssam",
        pseudo: "klmklm",
    },
    {
        id: 7,
        groupeId: 15,
        nomMembre: "bounar",
        pseudo: "sfsf12",
    },
    {
        id: 15,
        groupeId: 3,
        nomMembre: "yassine",
        pseudo: "kjkj17",
    }

]

// la declaration

const membresForm = document.getElementById("members-form");

const nomInput = document.getElementById("nom-du-membre");

const pseudoInput = document.getElementById("pseudo-du-membre");

const membreContainer = document.getElementById("membre-container");

const groupeSelect = document.getElementById("Select-Groupe");

// creaction dun membre
membresForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nom = nomInput.value;
    const pseudo = pseudoInput.value;
    const groupe = groupeSelect.value;

    const nouveauMembre = {
        id: Date.now(),
        groupeId: Number(groupe),
        nomMembre: nom,
        pseudo: pseudo
    };

    membres.push(nouveauMembre);
    console.log(membres);

    membresForm.reset();
    
  
});


// affichage

membres.forEach(function (membre) {

    const carte = document.createElement("div");

    carte.textContent = membre.nomMembre;

    membreContainer.appendChild(carte);

     membres.push(nouveauMembre);
     membresForm.reset();
    
});

