export function transactionToJson(title, dueDate, amount, frequency, direction) {
    return JSON.stringify({
        title: title,
        dueDate: dueDate,
        amount: parseInt(amount),
        frequency: frequency,
        direction: direction
    });
}