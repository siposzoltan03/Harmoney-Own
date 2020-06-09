export const validName = (name, state) => {
    const result = {
        "isValid": false,
        "errorText": ""
    };
    const maxLength = name === state.firstName ? 20 : 50;
    const currentName = name;
    const pattern = `^[a-zA-Z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ffőŐűŰ.,'\\s-]{1,${maxLength}}$`;


    if (currentName.match(pattern)) {
        result.isValid = true;
    } else {
        result.errorText = `The ${name} name can't contain any number or special character`;
    }
    if (currentName.length > maxLength) {
        result.errorText = `The ${name} name can't be longer than ${maxLength} characters`;
    }
    if (currentName.length === 0) {
        result.errorText = "This field is required";
    }
    return result;
};

export const validEmail = (state) => {
    const result = {
        isValid: false,
        errorText: ""
    };
    const currentEmail = state.email;
    const pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";

    if (currentEmail.match(pattern)) {
        result.errorText = "";
        result.isValid = true;
    } else {
        result.errorText = "Please enter a valid email address ie. e_xa-+mp.le%@example.com";
        result.isValid = false;
    }
    if (currentEmail.length === 0) {
        result.errorText = "This field is required";
        result.isValid = false;
    }
    if (currentEmail.length > 320) {
        result.errorText = "Email address can't be longer than 320 characters";
        result.isValid = false;
    }
    return result;
};


export const validPassword = (state) => {
    const result = {
        isValid: false,
        errorText: ""
    };

    const currentPassword = state.password;
    const pattern = "(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*_-])(?!.*?[\\s\"˘°˛`˙´˝¨¤]).{4,20}$";
    const exclusionPattern = "[\\s\"˘°˛`˙´˝¨¤]$";

    if (currentPassword.match(pattern)) {
        result.errorText = "";
        result.isValid = true;
    } else {
        result.errorText = "The password must contain at least one uppercase letter, one lowercase letter, one number and a special character";
        result.isValid = false;
    }

    if (currentPassword.length < 4) {
        result.errorText = "The password must be at least 4 characters long";
        result.isValid = false;
    }

    if (currentPassword.length === 0) {
        result.errorText = "This field is required";
        result.isValid = false;
    }

    if (currentPassword.length > 20) {
        result.errorText = "Password can't be longer than 20 characters";
        result.isValid = false;
    }

    if (currentPassword.match(exclusionPattern)) {
        result.errorText = "The password can't contain other special characters than #?!@$%^&*_-";
        result.isValid = false;
    }

    return result;
};


export const validPasswordConfirmation = (state) => {
    const result = {
        isValid: false,
        errorText: ""
    };
    const currentPassword = state.password;
    const confirmationPassword = state.passwordConfirmation;

    if (currentPassword === confirmationPassword) {
        result.errorText = "";
        result.isValid = true;
    } else {
        result.errorText = "Passwords don't match";
        result.isValid = false;
    }

    if (confirmationPassword.length === 0) {
        result.errorText = "This field is required";
        result.isValid = false;
    }

    return result;
};

