function showRegister() {
    document.getElementById("loginForm").classList.remove("active");
    document.getElementById("registerForm").classList.add("active");
}

function showLogin() {
    document.getElementById("registerForm").classList.remove("active");
    document.getElementById("loginForm").classList.add("active");
}

function togglePassword(id) {
    let input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}

/* LOGIN VALIDATION */
document.getElementById("loginForm").addEventListener("submit", function(e) {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (!email.includes("@")) {
        alert("Enter valid email");
        e.preventDefault();
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters");
        e.preventDefault();
    }
});

/* REGISTER VALIDATION */
document.getElementById("registerForm").addEventListener("submit", function(e) {
    let password = document.getElementById("registerPassword").value;
    let confirm = document.getElementById("confirmPassword").value;

    if (password.length < 6) {
        alert("Password too short");
        e.preventDefault();
    } else if (password !== confirm) {
        alert("Passwords do not match");
        e.preventDefault();
    }
});