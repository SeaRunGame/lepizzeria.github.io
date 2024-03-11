document.addEventListener("DOMContentLoaded", HandleEvent("check_log_status"))

function HandleEvent(event) 
{
    if (event === "check_log_status") 
    {
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
    else if (event === "order_pizza_next")
    {
        const dropDown = document.getElementById("pizza_order_dropdown");
        const pizza_id = dropDown.value;

        var amount = document.getElementById("amount_field").value;

        if (pizza_id === "null")
        {
            alert("Ole hyvä ja valitse pizza");
        }
        else
        {
            if (amount === "" || amount === "0" || Number(amount) < 0)
            {
                alert("Ole hyvä ja anna järkevä määrä");
            }
            else
            {
                localStorage.setItem("pizza", dropDown.querySelector('option[value="' + pizza_id + '"]').textContent);
                localStorage.setItem("amount", amount);
                document.getElementById("pizza_form_1").style.display = "none";
                document.getElementById("pizza_form_2").style.display = "block";
                document.getElementById("pizza").textContent = "Pizza: " + dropDown.querySelector('option[value="' + pizza_id + '"]').textContent;
                document.getElementById("amount").textContent = "Määrä: " + amount;

            }
        }
    }
    else if (event === "order_pizza_next_2")
    {
        var failed = false;
        document.getElementById("deliveryLocation").style.display = "none";
        var pizza = localStorage.getItem("pizza");
        var amount = localStorage.getItem("amount");
        var deliveryType;
        var deliverLocation;

        if (document.getElementById("deliveryDiv").style.display === "block")
        {
            deliveryType = "Kuljetus";
            if (document.getElementById("deliveryDiv").value !== "")
            {
                deliverLocation = document.getElementById("deliveryDiv").value;
                document.getElementById("deliveryLocation").style.display = "block";
            }
            else
            {
                alert("Anna osoite");
                failed = true;
            }
        }
        else
        {
            deliveryType = "Nouto";
            deliverLocation = "null";
        }
        if (!failed)
        {
            document.getElementById("pizza_form_2").style.display = "none";
            document.getElementById("pizza_form_3").style.display = "block";

            var total = Number(amount) * 15;
            
            if (deliveryType === "Kuljetus")
            {
                total += 5;
            }


            document.getElementById("item").textContent = "Tuote: " + pizza;
            document.getElementById("amount_final").textContent = "Määrä: " + amount;
            document.getElementById("deliveryType").textContent = "Toimitustapa: " + deliveryType;
            document.getElementById("deliveryLocation").textContent = "Toimitusosoite: " + deliverLocation;
            document.getElementById("total").textContent = "Hinta yhteensä: " + total + "€";
        }
    }
    else if (event === "ShowDelivery")
    {
        document.getElementById("deliveryDiv").style.display = "block";
    }
    else if (event === "HideDelivery")
    {
        document.getElementById("deliveryDiv").style.display = "none";
    }
    else 
    {
        document.write("Error 404_1 Unkown event call");
    }
}



