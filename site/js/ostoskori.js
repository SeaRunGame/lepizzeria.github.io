document.addEventListener("DOMContentLoaded", LoadCart());

function LoadCart()
{
    var cart_text = document.getElementById("ostoskori_text");
    var cart_list = document.getElementById("cart_list");
    var total_text = document.getElementById("ostoskori_text");
    var order_num = 0;

    if ("orders" in localStorage)
    {
        let orders_raw = localStorage.getItem("orders").split("/");
        let orders = {};
        let currentKey = "";

        for (let i = 0; i < orders_raw.length; i++) 
        {
            let [key, value] = orders_raw[i].split(":");
            key = key.trim();
            value = value.trim();

            if (key === "Tilaus" && value === "0") 
            {
                order_num++;
                currentKey = "Tilaus " + order_num;
                orders[currentKey] = [];
            } 
            else 
            {
                orders[currentKey].push(key + " : " + value);
            }
        }

        for (let key in orders) 
        {
            if (orders.hasOwnProperty(key)) 
            {
                if (key.startsWith("Tilaus")) 
                {
                    var orderTitle = document.createElement("li");
                    orderTitle.textContent = "-----------------------" + key + "-----------------------";
                    cart_list.appendChild(orderTitle);
                }
                let items = orders[key];
                for (let i = 0; i < items.length; i++) 
                {
                    var cartItem = document.createElement("li");
                    cartItem.textContent = items[i];
                    cart_list.appendChild(cartItem);
                }
            }
        }


    }
    else
    {
        cart_text.textContent = "Et ole tilannut mitään";
        document.getElementById("order_final").style.display = "none";
    }
}