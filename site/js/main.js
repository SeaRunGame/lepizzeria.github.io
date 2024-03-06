function HandleEvent(event) //eventHandler
{
    if (event === "log_in_attempt") //log in event
    {
        // Get username and password
        var username = document.getElementById("username-field").textContent;
        var password = document.getElementById("password-field").textContent;

        //if username exists
        if (username in localStorage)
        {
            alert("Username already exist!"); 
        }
        else //save data and log in
        {
            HandleEvent("save_account_data");
        } 
    }
    else if (event === "save_account_data") //dave account data event
    {
        // Get username and password
        var username = document.getElementById("username-field").textContent;
        var password = document.getElementById("password-field").textContent;

        //Save account data to localstorage
        localStorage.setItem(username, password);            
        alert("Success"); //Debug
        HandleEvent("logged_in"); //log in
    }
    else if (event === "logged_in")
    {
        //hide log in elements
        document.getElementById("username-field").style.visibility = 'hidden';
        document.getElementById("password-field").style.visibility = 'hidden';
        document.getElementById("log-in-button").style.visibility = 'hidden';

        //show logged in elements
        document.getElementById("username-text").style.visibility = "visible";
        var username = document.getElementById("username-field").textContent; //Get username
        //set the welcome text
        document.getElementById("username-text").textContent = "Welcome, " + localStorage.getItem(username) + "!";
    }
    else
    {
        document.write("Error 404 Unexpected event call");
    }
}