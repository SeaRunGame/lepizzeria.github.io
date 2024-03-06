document.addEventListener("DOMContentLoaded", HandleEvent("check_log_status"))

function HandleEvent(event) //eventHandler
{
    if (event === "log_in_attempt") //log in event-----------------------------------
    {
        // Get username and password
        var username = document.getElementById("username-field").value;
        var password = document.getElementById("password-field").value;

        //if username exists
        if (username in localStorage)
        {
            localStorage.setItem("logged_in", username);
            HandleEvent("logged_in");
        }
        else
        {
            alert("Account credentials are incorrect");
        }
    }
    else if (event === "create-account")//------------------------------------------------
    {
        if (document.getElementById("new-username-field").value !== "" && document.getElementById("new-password-field").value !== "")
        {
            HandleEvent("save_account_data");
        }
        else
        {
            alert("invalid credentials");
        }
    }
    else if (event === "check_log_status")//---------------------------------------------
    {
        if ("logged_in" in localStorage)
        {
            if (localStorage.getItem("logged_in") !== "none")
            {
                HandleEvent("logged_in");
            }
            else
            {
                document.getElementById("log-in-page").style.display = 'none';
                document.getElementById("register-page").style.display = 'none';
                document.getElementById("logged_in_page").style.display = 'block';
            }
        }
        else
        {
            document.getElementById("log-in-page").style.display = 'none';
            document.getElementById("register-page").style.display = 'none';
            document.getElementById("logged_in_page").style.display = 'block';
        }
    }
    else if (event === "save_account_data") //dave account data event-------------------------
    {
        // Get username and password
        var username = document.getElementById("new-username-field").value;
        var password = document.getElementById("new-password-field").value;

        //Save account data to localstorage
        localStorage.setItem(username, password);
        //set logged in;
        localStorage.setItem("logged_in", username);            
        alert("Success"); //Debug
        HandleEvent("logged_in"); //log in
    }
    else if (event === "logged_in")//------------------------------------------------
    {
        //hide elements
        document.getElementById("log-in-page").style.display = 'none';
        document.getElementById("register-page").style.display = 'none';

        //show logged in elements
        document.getElementById("logged_in_page").style.display = 'block';
        //set the welcome text
        document.getElementById("username-text").textContent = "Welcome, " + localStorage.getItem("logged_in") + "!";
    }
    else if (event === "log_out")
    {
        //show elements
        document.getElementById("log-in-page").style.display = 'block';
        document.getElementById("register-page").style.display = 'block';

        //hide logged in elements
        document.getElementById("logged_in_page").style.display = 'none';

        localStorage.setItem("logged_in", "none");
    }
    else//if event is unkown--------------------------------------------------------------
    {
        document.write("Error 404 Unexpected event call");
    }
}