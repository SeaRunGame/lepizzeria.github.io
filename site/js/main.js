document.addEventListener("DOMContentLoaded", HandleEvent("check_log_status"))

function HandleEvent(event) 
{
    if (event === "check_log_status") {
        if ("logged_in" in localStorage && localStorage.getItem("logged_in") !== "") 
        {
            // User is logged in
            document.getElementById("logged_in_page").style.display = 'block';
            document.getElementById("log_in_link").style.display = 'none';
            HandleEvent("logged_in");
        } 
        else 
        {
            // User is not logged in
            document.getElementById("logged_in_page").style.display = 'none';
            document.getElementById("log_in_link").style.display = 'block';
        }
    } 
    else if (event === "logged_in") 
    {
        // Show logged in elements
        document.getElementById("logged_in_page").style.display = 'block';
        document.getElementById("log_in_link").style.display = 'none';

        // Set the welcome text
        document.getElementById("username-text").textContent = "Kiva nähdä taas, " + localStorage.getItem("logged_in") + "!\xa0\xa0";
    } 
    else if (event === "log_out") 
    {
        // Hide logged in elements
        document.getElementById("logged_in_page").style.display = 'none';
        document.getElementById("log_in_link").style.display = 'block';

        localStorage.setItem("logged_in", "");
    }
    else if (event === "gotoPizza")
    {
        const dropDown = document.getElementById("pizza_dropdown");
        const pizza_id = dropDown.value;

        if (pizza_id === "pizza_1")
        {
            window-location.replace("pizza_1.html");
        }
        else if (pizza_id === "pizza_2")
        {
            window-location.replace("pizza_2.html");
        }
        else if (pizza_id === "pizza_3")
        {
            window-location.replace("pizza_3.html");
        }
        else if (pizza_id === "pizza_4")
        {
            window-location.replace("pizza_4.html");
        }
        else if (pizza_id === "pizza_5")
        {
            window-location.replace("pizza_5.html");
        }
        else if (pizza_id === "pizza_6")
        {
            window-location.replace("pizza_6.html");
        }
        else
        {
            window-location.replace("index.html");
        }
    } 
    else 
    {
        document.write("Error 404 Unexpected event call");
    }
}


