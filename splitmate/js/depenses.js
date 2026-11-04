import { membres } from "./ui.js";
import {
  expenses, depensesForm, expenseTitle, montantInput, categorieSelect, dateInput, paymentSelect, memberId, depensesList
} from "./ui.js";


let depenseId = Date.now();
if (depensesForm) {
  depensesForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let depenseIdCounter = depenseId++;
    let payeurId = "You";
    const expenseTitleValue = expenseTitle.value;
    const montantInputValue = montantInput.value;
    const categorieSelectValue = categorieSelect.value;
    const dateInputValue = dateInput.value;
    const paymentSelectValue = paymentSelect.value;
    let expense = {
      depenseId: depenseIdCounter,
      titre: expenseTitleValue,
      montant: montantInputValue,
      categorie: categorieSelectValue,
      date: dateInputValue,
      payeurId: payeurId,
      parts: [
        {
          memberId: memberId,
          montant: montantInputValue
        }
      ]
    };
    console.log(expense);
    expenses.push(expense);
    console.log(expenses);
    depensesForm.reset();

    displayDepenses(expenses);
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
                  <p>montant : ${expense.montant}DH</p>
                  <div>
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
displayDepenses(expenses);