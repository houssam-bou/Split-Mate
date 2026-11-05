import { membres } from "./ui.js";
import {
  expenses, mutateExpenses, depensesForm, expenseTitle, montantInput, categorieSelect, dateInput, paymentSelect, memberId, depensesList
} from "./ui.js";


let depenseId = Date.now();
if (depensesForm) {
  depensesForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let depenseIdCounter = depenseId++;
    let payeurId = "You";
    const paymentSelectValue = paymentSelect.value;
    let expense = {
      depenseId: depenseIdCounter,
      titre: expenseTitle.value,
      montant: montantInput.value,
      categorie: categorieSelect.value,
      date: dateInput.value,
      payeurId: payeurId,
      parts: [
        {
          memberId: memberId,
          montant: montantInput.value
        }
      ]
    };
    console.log(expense);
    expenses.push(expense);
    console.log(expenses);
    depensesForm.reset();

    displayDepenses(expenses);
    deleteDepenseButton();
  });
};
function displayDepenses(expenses) {
  depensesList.innerHTML = "";
  expenses.forEach(expense => {
    depensesList.innerHTML += `
                <li data-id = "${expense.depenseId}">
                <div id="div-name">
                  <h3>${expense.titre}</h3>
                  <p>depense id : ${expense.depenseId}</p>
                  </div>
                  <div> 
                  <p>montant : ${expense.montant}DH</p>
                  <p>categorie : ${expense.categorie}</p>
                  <p>la date de debute : ${expense.date}</p>
                </div>
                <div id="div-delete">
                   <span class="group-currency">payeur id : ${expense.payeurId}</span>
                  <button data-id = "${expense.depenseId}">Delete</button>
                </div>
              </li>
          `
  });
}
function deleteDepenseButton() {

  let deleteDepenseBtns = depensesList.querySelectorAll("button");
  deleteDepenseBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      console.log(e.target);

      let deletedDepenseId = e.target.getAttribute("data-id");
      console.log(deletedDepenseId, "you cliceked ");


      let newExpenses = expenses.filter((expense) => expense.depenseId != deletedDepenseId);

      mutateExpenses(newExpenses)

      displayDepenses(newExpenses);
      deleteDepenseButton();
    });
  });
}


displayDepenses(expenses);
deleteDepenseButton();