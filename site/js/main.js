document.addEventListener("DOMContentLoaded", HandleEvent("check_log_status"))

function HandleEvent(event) {
    if (event === "check_log_status") {
        if ("logged_in" in localStorage && localStorage.getItem("logged_in") !== "") {
            // User is logged in
            document.getElementById("logged_in_page").style.display = 'block';
            document.getElementById("log_in_link").style.display = 'none';
            HandleEvent("logged_in");
        } else {
            // User is not logged in
            alert("not logged in");
            document.getElementById("logged_in_page").style.display = 'none';
            document.getElementById("log_in_link").style.display = 'block';
        }
    } else if (event === "logged_in") {
        // Show logged in elements
        alert("logging in...");
        document.getElementById("logged_in_page").style.display = 'block';
        document.getElementById("log_in_link").style.display = 'none';

        // Set the welcome text
        document.getElementById("username-text").textContent = "Welcome, " + localStorage.getItem("logged_in") + "!";
    } else if (event === "log_out") {
        // Hide logged in elements
        document.getElementById("logged_in_page").style.display = 'none';
        document.getElementById("log_in_link").style.display = 'block';

        localStorage.setItem("logged_in", "");
    } else {
        document.write("Error 404 Unexpected event call");
    }
}


