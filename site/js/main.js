function HandleEvent(event) {
    if (event === "check_log_status") 
    {
        if ("logged_in" in localStorage) 
        {
            if (localStorage.getItem("logged_in") === "") {
                document.getElementById("logged_in_page").style.display = 'block';
                document.getElementById("log_in_link").style.visibility = 'visible'; // Show login link
            } else {
                HandleEvent("logged_in");
            }
        } else 
        {
            document.getElementById("logged_in_page").style.display = 'block';
            document.getElementById("log_in_link").style.visibility = 'visible'; // Show login link
        }
    } 
    else if (event === "logged_in") 
    {
        console.log("In logged in")
        // Show logged in elements
        document.getElementById("logged_in_page").style.display = 'block';

        // Hide login link
        var loginLink = document.getElementById("log_in_link");
        if (loginLink) 
        {
            loginLink.style.visibility = 'hidden';
        }

        // Set the welcome text
        document.getElementById("username-text").textContent = "Welcome, " + localStorage.getItem("logged_in") + "!";
    } 
    else if (event === "log_out") 
    {
        // Hide logged in elements
        document.getElementById("logged_in_page").style.display = 'none';

        // Show login link
        var loginLink = document.getElementById("log_in_link");
        if (loginLink) {
            loginLink.style.visibility = 'visible';
        }

        localStorage.setItem("logged_in", "");
    } 
    else 
    {
        document.write("Error 404 Unexpected event call");
    }
}
