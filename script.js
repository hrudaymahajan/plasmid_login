document.getElementById("registrationForm").addEventListener("submit", function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});

function validateName() {
    let name = document.getElementById("name").value;
    document.getElementById("nameError").innerText = name.length >= 5 ? "" : "Name must be at least 5 characters";
}

function validateEmail() {
    let email = document.getElementById("email").value;
    document.getElementById("emailError").innerText = email.includes("@") ? "" : "Enter a valid email";
}

function validatePhone() {
    let phone = document.getElementById("phone").value;
    document.getElementById("phoneError").innerText = /^[0-9]{10}$/.test(phone) && phone !== "1234567890" ? "" : "Enter a valid 10-digit phone number";
}

function validatePassword() {
    let password = document.getElementById("password").value;
    let name = document.getElementById("name").value;
    document.getElementById("passwordError").innerText = password.length >= 8 && password !== "password" && password !== name ? "" : "Password must be at least 8 characters and not too common";
}

function validateConfirmPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    document.getElementById("confirmPasswordError").innerText = password === confirmPassword ? "" : "Passwords do not match";
}

function validateForm() {
    validateName();
    validateEmail();
    validatePhone();
    validatePassword();
    validateConfirmPassword();
    return document.querySelectorAll(".error").innerText === "";
}
