document.addEventListener("DOMContentLoaded", HandleEvent("check_log_status"));

function HandleEvent(event) 
{
    if (event === "check_log_status") 
    {
        var path = window.location.pathname;
        var current_page = path.split("/").pop().replace(".html", "");
        
        if (current_page !== "index" && current_page !== "log_in" && current_page !== "create_pizza" && current_page !== "order_pizza")
        {
            localStorage.setItem("current_page", current_page);
        }

        if ("logged_in" in localStorage && "log_status" in localStorage) 
        {
            if (localStorage.getItem("logged_in") === "" && localStorage.getItem("log_status") === "not_logged_in")
            {
                // User is not logged in
                document.getElementById("logged_in_page").style.display = 'none';
                document.getElementById("log_in_link").style.display = 'block';
                if (current_page === "order")
                {
                    document.getElementById("pizza_form_1").style.display = "none";
                    document.getElementById("not_logged_in").style.display = 'block';
                }
            }
            else
            {
                // User is logged in
                document.getElementById("logged_in_page").style.display = 'block';
                document.getElementById("log_in_link").style.display = 'none';
                HandleEvent("logged_in");
            }
        } 
        else 
        {
            // User is not logged in
            document.getElementById("logged_in_page").style.display = 'none';
            document.getElementById("log_in_link").style.display = 'block';
            document.getElementById("pizza_form_1").style.display = "none";
            document.getElementById("not_logged_in").style.display = 'block';
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
        localStorage.setItem("log_status", "not_logged_in");
        var path = window.location.pathname;
        var current_page = path.split("/").pop();
        window-location.replace(current_page);
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
        var checkbox = document.getElementById("gluten-free");
        var isGlutenFree = checkbox.checked;
        localStorage.setItem("special", document.getElementById("additional").value);
        localStorage.setItem("pizza", dropDown.querySelector('option[value="' + pizza_id + '"]').textContent);
        var amount = document.getElementById("amount_field").value;
        localStorage.setItem("amount", amount);

        if (isGlutenFree)
        {
            localStorage.setItem("gluten-free", "true");
        }
        else
        {
            localStorage.setItem("gluten-free", "false");
        }

        if (pizza_id === "null" || pizza_id === null)
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
                var pizza = localStorage.getItem("pizza");
                var amount = localStorage.getItem("amount");
                var total = 0;

                switch (pizza) 
                {
                    case "Napoletana":
                        total += 12 * amount;
                        break;
                    case "Margherita":
                        total += 10 * amount;
                        break;
                    case "Al taglio":
                        total += 15 * amount;
                        break;
                    case "Caprese":
                        total += 18 * amount;
                        break;
                    case "Alla diavola":
                        total += 15 * amount;
                        break;
                    default:
                        alert("Virhe");
                        break;
                }

                var special_notes;
                var special = false;

                total += (localStorage.getItem("gluten-free") === "true") ? 2 : 0;

                if (localStorage.getItem("gluten-free") === "true")
                {
                    if (localStorage.getItem("special") !== "")
                    {
                        special_notes = "Gluteeniton pohja, " + localStorage.getItem("special");
                        special = true;
                    }
                    else
                    {
                        special_notes = "Gluteeniton pohja";
                    }
                }
                else
                {
                    if (localStorage.getItem("special") !== "")
                    {
                        special_notes = localStorage.getItem("special");
                        special = true;
                    }
                    else
                    {
                        special_notes = "Ei ole";
                    }
                }

                document.getElementById("item").textContent = "Tuote: " + pizza;
                document.getElementById("amount_final").textContent = "Määrä: " + amount;
                document.getElementById("special").textContent = "Erityishuomiot: " + special_notes;
                document.getElementById("total").textContent = "Hinta yhteensä: " + ((special) ? total += 5 : total) + "€";
                
                document.getElementById("pizza_form_1").style.display = "none";
                document.getElementById("pizza_form_2").style.display = "block";

            }
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
    else if (event === "Order")
    {
        //Create cart Datastring
        var order = "";
        if ("orders" in localStorage)
        {
            order = localStorage.getItem("orders");
            order += "/Tilaus:0/";
        }
        else
        {
            order = "Tilaus:0/"
        }

        order += document.getElementById("item").textContent;
        order += "/" + document.getElementById("amount_final").textContent;
        order += "/" + document.getElementById("special").textContent;
        order += "/" + document.getElementById("total").textContent;
        //Add to cart
        localStorage.setItem("orders", order);

        document.getElementById("pizza_form_2").style.display = "none";
        document.getElementById("loader").style.display = "block";

        setTimeout(function() {
            document.getElementById("loader").style.display = "none";
            document.getElementById("order-finish").style.display = "block";
        }, 3000);
    }
    else if (event === "menu")
    {
        window-location.replace("menu.html");
    }
    else if (event === "sendfeedback")
    {
        alert("Palaute lähetetty!");
    }
    else if (event === "hidetext") 
    {
        document.getElementById("virheteksti").style.display = "none";
        
    }
    else 
    {
        document.write("Error 404_1 Unexpected unknown event call");
    }   
}



