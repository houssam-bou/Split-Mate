import { membres } from "./ui.js";
import {
    expenses, depensesForm, expenseTitle, montantInput, categorieSelect, dateInput, paymentSelect
} from "./ui.js";



if (depensesForm) {
  depensesForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let depenseIdCounter = depenseId++;
    let payeurIdCounter = payeurId++;
    const expenseTitleValue = expenseTitle.value;
    const montantInputValue = montantInput.value;
    const categorieSelectValue = categorieSelect.value;
    const dateInputValue = dateInput.value;
    const paymentSelectValue = paymentSelect.value;
    let part = montant / membres.length;

    
    const expense = {
      depenseId : depenseIdCounter,
      titre : expenseTitleValue,
      montant : montantInputValue,
      categorie : categorieSelectValue,
      date : dateInputValue,
      payeurId : paymentSelectValue,
      parts:[
        {
            memberId : memberId,
            montant : part
        }
      ]
    };
    console.log(expense);
    expenses.push(expense);
    console.log(expenses);
    depensesForm.reset();
  });
}
