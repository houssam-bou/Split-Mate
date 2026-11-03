import { groups } from "./ui.js";
import { membres } from "./membres.js";
import { expenses } from "./depenses.js";
import { dashboardDepensesTotal,dashboardMembreCount,dashboardGroupCount } from "./ui.js";


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

