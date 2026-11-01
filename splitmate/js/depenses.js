
export const expenses = [
    {
        id: 1,
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
        id: 2,
        groupeId: 1,
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
        id: 3,
        groupeId: 2,
        titre: "Transport",
        montant: 120,
        categorie: "Transport",
        date: "2026-10-31",
        payeurId: 4,
        parts: [
            { membreId: 4, montant: 60 },
            { membreId: 5, montant: 60 }
        ]
    },
    {
        id: 4,
        groupeId: 2,
        titre: "Internet",
        montant: 200,
        categorie: "Abonnement",
        date: "2026-11-01",
        payeurId: 5,
        parts: [
            { membreId: 4, montant: 100 },
            { membreId: 5, montant: 100 }
        ]
    }
];