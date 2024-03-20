document.addEventListener("DOMContentLoaded", LoadCart());

function LoadCart()
{
    var cart_text = document.getElementById("ostoskori_text");
    var cart_list = document.getElementById("cart_list");
    var total_text = document.getElementById("total_final");
    var total_amount = document.getElementById("total_amount");
    var delivery_type = document.getElementById("deliveryType");
    var delivery_location = document.getElementById("deliveryLocation");
    var delivery_time = document.getElementById("delivery-time");
    var order_num = 0;

    if ("orders" in localStorage)
    {
        let orders_raw = localStorage.getItem("orders").split("/");
        let orders = {};
        let currentKey = "";

        for (let i = 0; i < orders_raw.length; i++)
        {
            let order = orders_raw[i].split(":");
            let key = order[0].trim();
            let value = order[1].trim();
            
            if (key === "Tilaus")
            {
                order_num++;
                var orderTitle = document.createElement("li");
                orderTitle.textContent = "-----------------------" + "Tilaus " + order_num + "-----------------------";
                cart_list.appendChild(orderTitle);
            }
            else
            {
                var cartItem = document.createElement("li");
                cartItem.textContent = key + ": " + value;
                cart_list.appendChild(cartItem);
            }
        }

        total_text.textContent = "Yhteishinta: " + localStorage.getItem("total_prize") + "€";
        total_amount.textContent = "Pizzoja yhteensä " + localStorage.getItem("total_amount") + " kappaletta";
    }
    else
    {
        cart_text.textContent = "Et ole tilannut mitään";
        cart_text.style.display = "block";
        document.getElementById("order_final").style.display = "none";
    }
}