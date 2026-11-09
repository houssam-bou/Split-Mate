# SplitMate 💸

### Expense Sharing Made Simple

SplitMate is a responsive web application designed to simplify expense sharing between friends, roommates, and groups. It allows users to manage shared expenses, track balances, and calculate reimbursements easily.

The project was developed as part of the **Week4** learning project.

## ✨ Features

- **Dashboard** — Overview of groups, members, and expenses.
- **Group Management** — Create, edit, and delete groups.
- **Member Management** — Add, update, and remove group members.
- **Expense Management** — Create, edit, delete, and organize expenses.
- **Balance Calculation** — Automatically calculate how much each member owes or is owed.
- **Reimbursements** — Generate payment suggestions between members.
- **Expense Filtering** — Filter expenses based on different criteria.
- **Local Storage** — Save application data locally in the browser.
- **Responsive Design** — Accessible on desktop, tablet, and mobile devices.

## 🛠️ Technologies

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (ES6+)
- LocalStorage API
- Git & GitHub

## 📂 Project Structure

```text
Week4/
└── splitmate/
    ├── index.html
    ├── css/
    ├── js/
    │   ├── main.js
    │   ├── storage.js
    │   ├── groupes.js
    │   ├── membres.js
    │   ├── depenses.js
    │   ├── soldes.js
    │   ├── filtres.js
    │   ├── ui.js
    │   └── utils.js
    └── README.md
```

*The structure above represents the intended modular architecture; actual filenames and folders may differ.*

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Git
- Visual Studio Code (recommended)
- Live Server extension (recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/houssam-bou/Week4.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Week4
   ```

3. Open the project in Visual Studio Code:

   ```bash
   code .
   ```

4. Open the `splitmate` folder.

5. Run `index.html` using Live Server.

## 💰 Currency

SplitMate uses **Moroccan Dirham (DH)** for expense calculations and reimbursements.

## 🧮 How It Works

1. Create a group.
2. Add members to the group.
3. Record shared expenses.
4. Select who paid and how the expense is shared.
5. Split expenses between members.
6. View balances and reimbursement suggestions.

The application calculates each member's balance based on the amount paid and the amount they owe.

## 💾 Data Storage

SplitMate uses the browser's **LocalStorage** to store application data.

- Data remains available after refreshing the page.
- No backend or database is required.
- Data is stored locally in the user's browser.

> Clearing browser storage may delete saved application data.

## 🎯 Project Objectives

- Practice JavaScript ES6+.
- Apply modular programming principles.
- Manipulate the DOM dynamically.
- Implement CRUD operations.
- Work with arrays and objects.
- Understand expense-sharing algorithms.
- Use LocalStorage for persistence.
- Collaborate using Git and GitHub.

## 👨‍💻 Authors

Developed as part of the Week4 project.

## 📄 License

This project was created for educational purposes.
