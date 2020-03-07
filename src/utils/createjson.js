export function transactionToJson(title, dueDate, amount, frequency, direction) {
    return JSON.stringify({
        title: title,
        dueDate: dueDate,
        amount: parseInt(amount),
        frequency: frequency,
        direction: direction
    });
}

export function userToJson(firstName, lastName, email, password) {
    return JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    });
}

export function userToJsonLogin(email, password) {
    return JSON.stringify({
        email: email,
        password: password
    });
}