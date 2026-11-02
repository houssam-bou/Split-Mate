
export let groups = [
  {
    groupeId: 1,
    nom: "taghazout groupe",
    description: "taghazout",
    devise: "EUR",
    dateDebut: "2000-05-05",
  },
  {
    groupeId: 2,
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
let groupesForm = document.getElementById("groupes-form");
const groupeName = document.getElementById("groupe-name");
const groupeDescription = document.getElementById("groupe-description");
const deviseSelect = document.getElementById("devise-select");
const dateGroupes = document.getElementById("date-groupes");
const groupesList = document.getElementById("groupes-container");
let groupeIdCounter = Date.now();

if (groupesForm) {
  groupesForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const groupeId = groupeIdCounter++;
    const nom = groupeName.value;
    const description = groupeDescription.value;
    const devise = deviseSelect.value;
    const date = dateGroupes.value;

    const groupe = {
      groupeId: groupeId,
      nom: nom,
      description: description,
      devise: devise,
      dateDebut: date
    };
    console.log(groupe);
    groups.push(groupe);
    console.log(groups);
    groupesForm.reset();
    displayGroupes(groups);
    deleteGroupeButton()
  });
}
function displayGroupes(groups) {
  if (!groupesList) {
    return
  };
  groupesList.innerHTML = "";
  if (groups.length <= 0) {
    alert("empty !!");
    return;
  }
  groups.forEach(groupe => {
    groupesList.innerHTML += `
                <li data-id = "${groupe.groupeId}">
                <div id="div-name">
                  <h3>${groupe.nom}</h3>
                  <p>Groupe Id : ${groupe.groupeId}</p>
                  </div>
                  <div>
                  <p>${groupe.description}</p>
                  <p>la date de debute : ${groupe.dateDebut}</p>
                </div>
                <div id="div-delete">
                   <span class="group-currency">Devise : ${groupe.devise}</span>
                  <button data-id = "${groupe.groupeId}">Delete</button>
                </div>
              </li>
          `
  });
}
function deleteGroupeButton() {
  if (!groupesList) {
    return;
  };
  let deleteGroupeBtns = groupesList.querySelectorAll("button");
  deleteGroupeBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      let deletedGroupeId = e.target.getAttribute("data-id");

      groups = groups.filter((groupe) => groupe.groupeId != deletedGroupeId);

      displayGroupes(groups);
      deleteGroupeButton();
    });
  });
}

displayGroupes(groups);
deleteGroupeButton();