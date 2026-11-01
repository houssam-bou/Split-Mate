export let groups = [
  {
    groupeId: 5,
    nom: "taghazout groupe",
    description: "taghazout",
    devise: "EUR",
    dateDebut: "2000-05-05",
  },
  {
    groupeId: 15,
    nom: "marrakech groupe",
    description: "marrakech",
    devise: "MAD",
    dateDebut: "2001-03-05",
  },
  {
    groupeId: 3,
    nom: "Youssoufia groupe",
    description: "youssoufia",
    devise: "USD",
    dateDebut: "2002-04-05",
  },
];

const groupesForm = document.getElementById("groupes-form");
const groupeName = document.getElementById("groupe-name");
const groupeDescription = document.getElementById("groupe-description");
const deviseSelect = document.getElementById("devise-select");
const dateGroupes = document.getElementById("date-groupes");
let groupeIdCounter = 0;

if (groupesForm) {

  groupesForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nom = groupeName.value;
    const description = groupeDescription.value.trim();
    const devise = deviseSelect.value;
    const date = dateGroupes.value;
    const groupe = {
      groupeId: groupeIdCounter,
      nom: nom,
      description: description,
      devise: devise,
      dateDebut: date
    };
    groupeIdCounter++;
    console.log(groupe);
  });
}  
