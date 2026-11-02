import { membres } from "./membres.js";
export const expenses = [
    {
        depenseId: 1,
        groupeId: 1,
        titre: "Courses alimentaires",
        montant: 300,
        categorie: "Alimentation",
        date: "2026-10-28",
        payeurId: 1,
        parts: [
            { membreId: 1, montant: 100 },
            { membreId: 2, montant: 100 },
            { membreId: 3, montant: 100 }
        ]
    },
    {
        depenseId: 2,
        groupeId: 2,
        titre: "Restaurant",
        montant: 180,
        categorie: "Restaurant",
        date: "2026-10-30",
        payeurId: 2,
        parts: [
            { membreId: 1, montant: 60 },
            { membreId: 2, montant: 60 },
            { membreId: 3, montant: 60 }
        ]
    },
    {
        depenseId: 3,
        groupeId: 3,
        titre: "Transport",
        montant: 120,
        categorie: "Transport",
        date: "2026-10-31",
        payeurId: 4,
        parts: [
            { membreId: 4, montant: 60 },
            { membreId: 5, montant: 60 }
        ]
    }   
];

const depensesForm = document.getElementById("expense-form");
const expenseTitle = document.getElementById("expense-title");
const montantInput = document.getElementById("amount");
const categorieSelect = document.getElementById("category-select") ;
const dateInput = document.getElementById("category-select");
const paymentSelect = document.getElementById("payment-select")
let depenseId = Date.now();
let memberId = membres.memberId;

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