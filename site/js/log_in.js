document.addEventListener("DOMContentLoaded", HandleEvent("check_log_status"))

function HandleEvent(event) //eventHandler
{
    if (event === "log_in_attempt") //log in event-----------------------------------
    {
        // Get username and password
        var username = document.getElementById("username-field").value;
        var password = document.getElementById("password-field").value;

        //if username exists
        if (username in localStorage && localStorage.getItem(username) === password)
        {
            localStorage.setItem("logged_in", username);         
            window-location.replace("index.html");
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
            if (localStorage.getItem("logged_in") !== "")
            {
                window-location.replace("index.html");
            }
        }
    }
    else if (event === "save_account_data") //save account data event-------------------------
    {
        // Get username and password
        var username = document.getElementById("new-username-field").value;
        var password = document.getElementById("new-password-field").value;

        //Save account data to localstorage
        if (username in localStorage)
        {
            alert("Username is already taken!");
            document.getElementById("new-username-field").value = "";
            document.getElementById("new-password-field").value = "";
        }
        else
        {
            localStorage.setItem(username, password);
            //set logged in;
            localStorage.setItem("logged_in", username);
            window-location.replace("index.html");
        }
    }
    else//if event is unkown--------------------------------------------------------------
    {
        document.write("Error 404 Unexpected event call");
    }
}