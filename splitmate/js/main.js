import { groups } from "./groupes.js";
import { membres } from "./membres.js";
import { expenses } from "./depenses.js";



const dashboardGroupCount = document.getElementById("dashboard-groupes-count");
const dashboardMembreCount = document.getElementById("dashboard-members-count");
const dashboardDepensesTotal = document.getElementById("dashboard-depenses-total");
function calculateTotalAmount() {
    let totalAmount = 0;
    expenses.forEach((expense) => {
        totalAmount += expense.montant;
    })
    dashboardDepensesTotal.textContent = `${totalAmount} DH`;
}
function displayDashboard() {

    dashboardGroupCount.textContent = groups.length;
    dashboardMembreCount.textContent = membres.length;
    calculateTotalAmount();
}
displayDashboard();

