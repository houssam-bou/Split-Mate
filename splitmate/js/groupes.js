
import { groups, groupesForm, groupeName, groupeDescription, deviseSelect, dateGroupes, groupesList } from "./ui.js"
let groupeIdCounter = Date.now();
if (groupesForm) {
  groupesForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let groupeId = groupeIdCounter++;
    const nom = groupeName.value;
    const description = groupeDescription.value;
    const devise = deviseSelect.value;
    const date = dateGroupes.value;

    let groupe = {
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
    deleteGroupeButton();
  });
}
function displayGroupes(groups) {
  if (!groupesList) {
    return
  };
  groupesList.innerHTML = "";
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