const LoginAllData = (event) => {
    event.preventDefault(); // Prevent default form submission

    const signemail = document.querySelector("#email");
    const signpass = document.querySelector("#password");

    const signemailValue = signemail.value.trim();
    const signpassValue = signpass.value.trim();

    const mail = localStorage.getItem("Email");
    const pass = localStorage.getItem("Password");

    console.log("Stored Email:", mail);
    console.log("Stored Password:", pass);
    console.log("Entered Email:", signemailValue);
    console.log("Entered Password:", signpassValue);

    if (!mail || !pass) {
        alert("No account found. Please sign up first.");
        return false;
    }

    if (mail != signemailValue) {
        signemail.style.border = "2px solid red";
        alert("Email does not match!");
        return false;
    } else {
        signemail.style.border = "2px solid green";
    }

    if (pass !== signpassValue) {
        signpass.style.border = "2px solid red";
        alert("Password does not match!");
        return false;
    }

    alert("Login Successful!");
    console.log("Redirecting to Home.html...");
    location.href = "/AllPages/Home.html"; // Ensure this path is correct

    return true;
};

document.querySelector("form").addEventListener("submit", LoginAllData);
