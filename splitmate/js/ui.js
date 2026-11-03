//export dashboard

const dashboardGroupCount = document.getElementById("dashboard-groupes-count");
const dashboardMembreCount = document.getElementById("dashboard-members-count");
const dashboardDepensesTotal = document.getElementById("dashboard-depenses-total");

export { dashboardDepensesTotal, dashboardGroupCount, dashboardMembreCount };

//export groupes
let groups = [
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

export { groups, groupesForm, groupeName, groupeDescription, deviseSelect, dateGroupes, groupesList, groupeIdCounter };

//export members 

 let membres = [
    {
        memberId: 14523415123,
        groupeId: 1,
        nomMembre: "houssam",
        pseudo: "roubio",
    },
    {
        memberId: 16514641611,
        groupeId: 2,
        nomMembre: "bounar",
        pseudo: "roubio12",
    },
    {
        memberId: 561641641646,
        groupeId: 3,
        nomMembre: "yassine",
        pseudo: "roubio17",
    }
]
export {membres};

//export expenses
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
const paymentSelect = document.getElementById("payment-select");
let depenseId = Date.now();
let memberId = membres.memberId;
let payeurId = "You";
export {depensesForm, expenseTitle,montantInput, categorieSelect, dateInput, paymentSelect,depenseId, memberId, payeurId}