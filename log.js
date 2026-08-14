let currentPassword = "0000";

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "roshan" && pass === "0000") {
        window.location.href = "port.html";
    } else {
        document.getElementById("error").innerText = "Invalid login details";
    }
}

function showForgotPassword() {
    document.getElementById("forgot-password-form").style.display = "block";
    document.getElementById("error").innerText = "";
    document.getElementById("reset-message").innerText = "";
}

function hideForgotPassword() {
    document.getElementById("forgot-password-form").style.display = "none";
    document.getElementById("newPassword").value = "";
    document.getElementById("confirmPassword").value = "";
    document.getElementById("reset-message").innerText = "";
}

function resetPassword() {
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("reset-message");

    if (newPassword === "" || confirmPassword === "") {
        message.innerText = "Please enter both passwords.";
        return;
    }

    if (newPassword !== confirmPassword) {
        message.innerText = "Passwords do not match.";
        return;
    }

    currentPassword = newPassword;
    message.innerText = "Password reset successful. You can now log in.";
    document.getElementById("password").value = "";
    document.getElementById("newPassword").value = "";
    document.getElementById("confirmPassword").value = "";
}
const contactButton = document.getElementById("RevealButton");
const displayDiv = document.getElementById("displayDiv");
contactButton.addEventListener("click", () => {
    displayDiv.innerHTML = "<b>Name</b>: Roshan Melvin C";
    displayDiv.innerHTML += "<br><b>Email</b>: roshanmelvinc@gmail.com";
    displayDiv.innerHTML += "<br><b>Phone</b>: 6369646776";
     displayDiv.innerHTML += "<br><b>Education</b>: B.E in Computer Science and Engineering";
         displayDiv.innerHTML += "<br><b>Language Known</b>: html, css, javascript, python, ";
             displayDiv.innerHTML += "<br><b>Tools</b>: Visual Studio Code, GitHub, Figma, Canva,miro";
                 displayDiv.innerHTML += "<br><b>CGPA</b>: 7.45";
     displayDiv.innerHTML += "<br><b>Interest</b>: designing, coding, and exploring new technologies";
     displayDiv.innerHTML += "<br><b>College Name</b>: Asan College of Engineering and Technology";
         displayDiv.innerHTML += "<br><b>Address</b>: chennai, Tamil Nadu, India";
    
});