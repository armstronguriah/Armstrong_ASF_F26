const MENU_ITEMS = [
    {
        id: 1,
        name: "Bulldog Breakfast Roll",
        description: "Scrambled egg, avocado, and cucumber wrapped in seasoned rice and nori.",
        price: 9.99,
        category: "Breakfast"
    },
    {
        id: 2,
        name: "Miso Breakfast Bowl",
        description: "Warm miso broth with rice, egg, tofu, and green onions.",
        price: 8.99,
        category: "Breakfast"
    },
    {
        id: 3,
        name: "Brass Bulldog Bento",
        description: "Teriyaki chicken, steamed rice, edamame, and cucumber salad.",
        price: 14.99,
        category: "Lunch"
    },
    {
        id: 4,
        name: "Copper California Roll",
        description: "Crab, avocado, and cucumber topped with sesame seeds.",
        price: 11.99,
        category: "Lunch"
    },
    {
        id: 5,
        name: "Steampunk Salmon Bowl",
        description: "Fresh salmon, sushi rice, avocado, cucumber, and spicy mayo.",
        price: 15.99,
        category: "Lunch"
    },
    {
        id: 6,
        name: "Dragon Engine Roll",
        description: "Tempura shrimp, avocado, cucumber, and spicy tuna.",
        price: 16.99,
        category: "Lunch"
    },
    {
        id: 7,
        name: "Brass Dragon Roll",
        description: "Eel, avocado, cucumber, and eel sauce wrapped in sushi rice.",
        price: 17.99,
        category: "Dinner"
    },
    {
        id: 8,
        name: "Bulldog Sashimi Platter",
        description: "Chef's selection of fresh salmon, tuna, and yellowtail sashimi.",
        price: 22.99,
        category: "Dinner"
    },
    {
        id: 9,
        name: "Ironclad Teriyaki",
        description: "Grilled chicken glazed with teriyaki sauce served with rice and vegetables.",
        price: 18.99,
        category: "Dinner"
    },
    {
        id: 10,
        name: "Golden Tempura Platter",
        description: "Crispy shrimp and seasonal vegetables served with dipping sauce.",
        price: 19.99,
        category: "Dinner"
    },
    {
        id: 11,
        name: "Steam Engine Ramen",
        description: "Rich miso broth with noodles, pork belly, egg, mushrooms, and green onions.",
        price: 17.99,
        category: "Dinner"
    },
    {
        id: 12,
        name: "Copper Crunch Roll",
        description: "Spicy tuna, cucumber, avocado, and crispy tempura flakes.",
        price: 13.99,
        category: "Dinner"
    }
];

const priceFormat = new Intl.NumberFormat("en-US",{
    style: "currency",
    currency: "USD"
})

const menuTableBody = document.getElementById("menu-table-body")

if (menuTableBody) {
    MENU_ITEMS.forEach(item => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td class="text-end">${priceFormat.format(item.price)}</td>
            <td>${item.category}</td>
            `
        menuTableBody.appendChild(row)
    })
}
// ======================================
//reservation validation
const form = document.querySelector("#reservation-form");
const result = document.querySelector("#reservation-result");

if (form) {
    form.addEventListener("submit", function (event) {

        // Prevents the page from refreshing
        event.preventDefault();

        // Gets values from the form
        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const partySize = document.querySelector("#party-size").value;
        const guests = Number(partySize);
        const dietary = document.querySelector("#dietary-notes").value.trim();
        const date = document.querySelector("#date").value;
        const time = document.querySelector("#time").value;

        // Function to display an alert
        function showAlert(message, type) {
            result.innerHTML = ""; //clears result

            const alert = document.createElement("div");
            alert.classList.add("alert", `alert-${type}`);
            alert.textContent = message;

            result.appendChild(alert);
        }

        // Validation
        if (name === "") {
            showAlert("Please enter your name.", "danger");
            return;
        }

        if (email === "") {
            showAlert("Please enter your email.", "danger");
            return;
        }

        if (partySize === "") {
            showAlert("Please select a party size.", "danger");
            return;
        }

        if (date === "") {
            showAlert("Please select a date.", "danger");
            return;
        }

        if (time === "") {
            showAlert("Please select a time.", "danger");
            return;
        }

        if (dietary.length > 30) {
            showAlert(
                "Dietary restrictions must be 30 characters or less.",
                "danger"
            );
            return;
        }

        // If validation passes
        const reservation = {
            name: name,
            email: email,
            partySize: guests,
            date: date,
            time: time,
            seating: document.querySelector('input[name="seating"]:checked').value,
            dietaryNotes: dietary,
            newsletter: document.querySelector("#newsletter").checked
        };

        console.log(reservation);

        showAlert(
            `Thank you, ${name}! Your reservation for ${guests} guest(s) has been submitted.`,
            "success"
        );

    });
}

