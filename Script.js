let bills = [];
let total = 0;

function addBill() {
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;

    if (amount && description) {
        const bill = {
            id: Date.now(),
            amount: parseFloat(amount),
            description: description
        };

        bills.push(bill);
        updateBillList();
        updateTotal();

        // Clear inputs
        document.getElementById('amount').value = '';
        document.getElementById('description').value = '';
    }
}

function deleteBill(id) {
    bills = bills.filter(bill => bill.id !== id);
    updateBillList();
    updateTotal();
}

function updateBillList() {
    const billList = document.getElementById('billList');
    billList.innerHTML = '';

    bills.forEach(bill => {
        const billItem = document.createElement('div');
        billItem.className = 'bill-item';
        billItem.innerHTML = `
            <span>${bill.description}: $${bill.amount.toFixed(2)}</span>
            <button onclick="deleteBill(${bill.id})">Delete</button>
        `;
        billList.appendChild(billItem);
    });
}

function updateTotal() {
    total = bills.reduce((sum, bill) => sum + bill.amount, 0);
    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}
