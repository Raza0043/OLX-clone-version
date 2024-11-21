document.addEventListener("DOMContentLoaded", function() {
    var items = {
        mobiles: [
            {
                name: "VIVO",
                model: "Y20",
                price: 30000,
                ram: "8GB",
                color: ["Black", "White", "Grey"]
            },
            {
                name: "Samsung",
                model: "Galaxy S21",
                price: 80000,
                ram: "12GB",
                color: ["Blue", "Silver", "Black"]
            },
            {
                name: "Oppo",
                model: "F17",
                price: 25000,
                ram: "6GB",
                color: ["Green", "White"]
            }
        ],
        cars: [
            {
                name: "Suzuki",
                model: "Cultus",
                price: 1500000,
                color: ["Red", "White", "Grey"]
            },
            {
                name: "Toyota",
                model: "Corolla",
                price: 3500000,
                color: ["Black", "Silver"]
            },
            {
                name: "Honda",
                model: "Civic",
                price: 4000000,
                color: ["Blue", "Black"]
            }
        ]
    };

    
    items.mobiles.forEach(mobile => {
        console.log(mobile.name);
    });


    items.cars.forEach(car => {
        console.log(car.name);
    });

    function generateCards() {
     
        var mobilesContainer = document.querySelector(".mobiles-section");
        var carsContainer = document.querySelector(".cars-section");


        if (mobilesContainer && carsContainer) {
            
            items.mobiles.forEach(mobile => {
                var card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `
                    <h3>${mobile.name}</h3>
                    <p>Model: ${mobile.model}</p>
                    <p>Price: Rs. ${mobile.price}</p>
                    <p>RAM: ${mobile.ram}</p>
                    <p>Colors: ${mobile.color.join(", ")}</p>
                `;
                mobilesContainer.appendChild(card);
            });

            
            items.cars.forEach(car => {
                var card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `
                    <h3>${car.name}</h3>
                    <p>Model: ${car.model}</p>
                    <p>Price: Rs. ${car.price}</p>
                    <p>Colors: ${car.color.join(", ")}</p>
                `;
                carsContainer.appendChild(card);
            });
        } 
    }

   
    generateCards();
});
