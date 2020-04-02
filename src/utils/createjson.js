export function transactionToJson(id, title, dueDate, amount, frequency, direction, category) {
    if (id === null) {
        return JSON.stringify({
            title: title,
            dueDate: dueDate,
            amount: parseInt(amount),
            frequency: frequency,
            direction: direction,
            category: category
        });
    } else {
        return JSON.stringify({
            id: parseInt(id),
            title: title,
            dueDate: dueDate,
            amount: parseInt(amount),
            frequency: frequency,
            direction: direction,
            category: category
        });
    }
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