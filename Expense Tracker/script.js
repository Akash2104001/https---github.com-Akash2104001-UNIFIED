document.addEventListener("DOMContentLoaded", function () {
    const expenseName = document.getElementById("expense-name");
    const expenseAmount = document.getElementById("expense-amount");
    const addExpenseBtn = document.getElementById("add-expense");
    const expenseList = document.getElementById("expense-list");
    const balance = document.getElementById("balance");

    let totalBalance = 0;

    addExpenseBtn.addEventListener("click", function () {
        const name = expenseName.value.trim();
        const amount = parseFloat(expenseAmount.value);

        if (name === "" || isNaN(amount) || amount <= 0) {
            alert("Please enter valid expense details.");
            return;
        }

        totalBalance -= amount;
        balance.textContent = `₹${totalBalance}`;

        const li = document.createElement("li");
        li.innerHTML = `${name}: ₹${amount} <button class="delete-btn">X</button>`;
        
        expenseList.appendChild(li);

        expenseName.value = "";
        expenseAmount.value = "";

        li.querySelector(".delete-btn").addEventListener("click", function () {
            totalBalance += amount;
            balance.textContent = `₹${totalBalance}`;
            expenseList.removeChild(li);
        });
    });
});
