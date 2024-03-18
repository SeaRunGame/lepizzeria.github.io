/*document.addEventListener("DOMContentLoaded", HandleEvent("check_if_logged"));

function HandleEvent(event)
{
    if (event === "check_if_logged")
    {
        if (!"logged_in" in localStorage || localStorage.getItem("logged_in") === "")
        {
            document.getElementById("pizza_form_1").style.display = "none";
            document.getElementById("not_logged_in").style.display = "block";
        }
        else
        {
            if ("current_page" in localStorage && localStorage.getItem("current_page") !== "create_pizza" && localStorage.getItem("current_page") !== "index" && localStorage.getItem("current_page") !== "log_in")
            {
                let pizza_dropdown = document.getElementById("pizza_order_dropdown");
                pizza_dropdown.value = localStorage.getItem("current_page");
            }
        }
    }
    else
    {
        document.write("Error 404_1 Unexpected unknown event call");
    }
}
*/