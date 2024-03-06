document.addEventListener("DOMContentLoaded", HandleEvent("check_log_status"))

function HandleEvent(event) //eventHandler
{
    
    if (event === "check_log_status")//---------------------------------------------
    {
        if ("logged_in" in localStorage)
        {
            if (localStorage.getItem("logged_in") !== "")
            {
                HandleEvent("logged_in");
            }
            else
            {
                document.getElementById("logged_in_page").style.display = 'block';
            }
        }
        else
        {
            document.getElementById("logged_in_page").style.display = 'block';
        }
    }
    else if (event === "logged_in")//------------------------------------------------
    {
        //show logged in elements
        document.getElementById("logged_in_page").style.display = 'block';

        //hide
        document.getElementById("log_in_link").style.display = 'none';

        //set the welcome text
        document.getElementById("username-text").textContent = "Welcome, " + localStorage.getItem("logged_in") + "!";
    }
    else if (event === "log_out")
    {
        //hide logged in elements
        document.getElementById("logged_in_page").style.display = 'none';

        localStorage.setItem("logged_in", "");
    }
    else//if event is unkown--------------------------------------------------------------
    {
        document.write("Error 404 Unexpected event call");
    }
}