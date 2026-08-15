// ========================================
// LOGIN DETAILS
// ========================================

let correctUsername = "roshan";
let correctPassword = "0000";


// ========================================
// LOGIN
// ========================================

function login() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;

    let message = document.getElementById("loginMessage");


    // WRONG USERNAME / PASSWORD
    if (username !== correctUsername || password !== correctPassword) {

        message.style.color = "red";
        message.textContent = "Wrong Username or Password! ❌";

        return;
    }


    // CORRECT LOGIN
    message.style.color = "lightgreen";
    message.textContent = "Login Successful!";


    // POPUP
    alert("Login Successful! ✅\n\nWelcome to My Portfolio! 🎉");


    // OPEN YOUR PORTFOLIO PAGE
    window.location.href = "port.html";
}


// ========================================
// SHOW RESET PAGE
// ========================================

function showReset() {

    document.getElementById("loginSection")
        .classList.add("hidden");

    document.getElementById("resetSection")
        .classList.remove("hidden");
}


// ========================================
// BACK TO LOGIN
// ========================================

function showLogin() {

    document.getElementById("resetSection")
        .classList.add("hidden");

    document.getElementById("loginSection")
        .classList.remove("hidden");
}


// ========================================
// RESET PASSWORD
// ========================================

function resetPassword() {

    let newPassword =
        document.getElementById("newPassword").value;

    let confirmPassword =
        document.getElementById("confirmPassword").value;

    let message =
        document.getElementById("resetMessage");


    if (newPassword === "" || confirmPassword === "") {

        message.style.color = "red";

        message.textContent =
            "Please enter both passwords.";

        return;
    }


    if (newPassword !== confirmPassword) {

        message.style.color = "red";

        message.textContent =
            "Passwords do not match.";

        return;
    }


    correctPassword = newPassword;

    message.style.color = "green";

    message.textContent =
        "Password reset successfully!";


    setTimeout(() => {

        showLogin();

    }, 1500);
}


// ========================================
// DASHBOARD
// ========================================

function openDashboard(username) {

    document.getElementById("loginSection")
        .classList.add("hidden");

    document.getElementById("resetSection")
        .classList.add("hidden");

    document.getElementById("dashboard")
        .classList.remove("hidden");


    document.getElementById("displayUsername")
        .textContent = username;

    document.getElementById("profileUsername")
        .textContent = username;
}


// ========================================
// DASHBOARD HOME
// ========================================

function showDashboard() {

    hidePages();

    document
        .getElementById("dashboardHome")
        .classList.remove("hidden");
}


// ========================================
// PROFILE
// ========================================

function showProfile() {

    hidePages();

    document
        .getElementById("profile")
        .classList.remove("hidden");
}


// ========================================
// SETTINGS
// ========================================

function showSettings() {

    hidePages();

    document
        .getElementById("settings")
        .classList.remove("hidden");
}


// ========================================
// HIDE DASHBOARD PAGES
// ========================================

function hidePages() {

    document
        .getElementById("dashboardHome")
        .classList.add("hidden");

    document
        .getElementById("profile")
        .classList.add("hidden");

    document
        .getElementById("settings")
        .classList.add("hidden");
}


// ========================================
// EDIT PROFILE
// ========================================

function editProfile() {

    let newName =
        prompt("Enter your new username:");

    if (newName !== null && newName.trim() !== "") {

        document.getElementById("displayUsername")
            .textContent = newName;

        document.getElementById("profileUsername")
            .textContent = newName;
    }
}


// ========================================
// DARK MODE
// ========================================

function darkMode() {

    document.body.classList.toggle("dark");

}


// ========================================
// LOGOUT
// ========================================

function logout() {

    document.getElementById("dashboard")
        .classList.add("hidden");

    document.getElementById("loginSection")
        .classList.remove("hidden");

    document.getElementById("username").value = "";

    document.getElementById("password").value = "";
}


// ========================================
// REVEAL MY DETAILS
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const contactButton =
        document.getElementById("RevealButton");

    const displayDiv =
        document.getElementById("displayDiv");


    if (contactButton && displayDiv) {

        contactButton.addEventListener("click", () => {

            displayDiv.innerHTML =
                "<b>Name</b>: Roshan Melvin C";

            displayDiv.innerHTML +=
                "<br><b>Email</b>: roshanmelvinc@gmail.com";

            displayDiv.innerHTML +=
                "<br><b>Phone</b>: 6369646776";

            displayDiv.innerHTML +=
                "<br><b>Education</b>: B.E in Computer Science and Engineering";

            displayDiv.innerHTML +=
                "<br><b>Language Known</b>: HTML, CSS, JavaScript, Python";

            displayDiv.innerHTML +=
                "<br><b>Tools</b>: Visual Studio Code, GitHub, Figma, Canva, Miro";

            displayDiv.innerHTML +=
                "<br><b>CGPA</b>: 7.45";

            displayDiv.innerHTML +=
                "<br><b>Interest</b>: Designing, coding, and exploring new technologies";

            displayDiv.innerHTML +=
                "<br><b>College Name</b>: Asan College of Engineering and Technology";

            displayDiv.innerHTML +=
                "<br><b>Address</b>: Chennai, Tamil Nadu, India";

        });

    }

});