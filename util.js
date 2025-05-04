// utils.js – Contains helper functions

export const showTab = (tab, setActiveTab) => {
    setActiveTab(tab);
};

export const togglePassword = (setShowPassword) => {
    setShowPassword(prev => !prev);
};

export const validateLogin = (loginData, setErrors) => {
    let errors = {};

    if (!loginData.username.trim()) {
        errors.username = "Username is required";
    }
    if (!loginData.password.trim()) {
        errors.password = "Password is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Returns true if there are no errors
};

export const validateSignUp = (signupData, setErrors) => {
    let errors = {};
    
    if (!signupData.name.trim()) {
        errors.name = "Name is required";
    }
    if (!signupData.surname.trim()) {
        errors.surname = "Surname is required";
    }
    if (!signupData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        errors.email = "Valid email is required";
    }
    if (!signupData.password.trim()) {
        errors.password = "Password is required";
    }
    if (signupData.password !== signupData.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
};