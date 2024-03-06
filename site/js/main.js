function SaveAccountData()
{
    var username = document.getElementById("username-field").textContent;
    var password = document.getElementById("password-field").textContent;

    if (username in localStorage)
    {
        alert("Username already exist!");
    }
    else
    {
        localStorage.setItem(username, password);
        alert("Success");
    }
}