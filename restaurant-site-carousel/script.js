let menuItems = [];
let filteredMenuItems = [];
let currentIndex = 0;

const priceFormat = new Intl.NumberFormat("en-US",{
    style: "currency",
    currency: "USD"
})

const menuImage = document.querySelector("#menu-image")
const menuName = document.querySelector("#menu-name")
const menuDescription = document.querySelector("#menu-description")
const menuCategory = document.querySelector("#menu-category")
const menuPrice = document.querySelector("#menu-price")

const categoryFilter = document.getElementById("category-filter")
const prevButton = document.getElementsByClassName("prev-button")[0]
const nextButton = document.getElementsByClassName("next-button")[0]

if (menuImage){
    fetch("menu.json")
        .then(response=>{
            if(response.ok){
                return response.json()
            }else{
                throw new Error("Could not load menu")
            }
        })
        .then(data=>{
            menuItems = data;
            filteredMenuItems = data;
            displayMenuItem();
        })
        .catch(err=>{
            console.error("Error loading menu:", err)
            window.location.href = "error.html";
        })
}

function displayMenuItem(){
    const item = filteredMenuItems[currentIndex]

    menuImage.src = `./images/${item.img}.png`;
    menuImage.alt = item.name

    menuName.textContent = item.name;
    menuDescription.textContent = item.description;
    menuCategory.textContent = item.category;
    menuPrice.textContent = priceFormat.format(item.price)

}
if (categoryFilter){
    categoryFilter.addEventListener("change", function (){
        const selectedCategory = categoryFilter.value;

        if (selectedCategory === "All"){
            filteredMenuItems = menuItems;
        } else {
            filteredMenuItems = menuItems.filter(item =>item.category === selectedCategory)
        }
        currentIndex = 0;
        displayMenuItem();
    })
}

function nextImage() {
    currentIndex ++;

    if (currentIndex >= filteredMenuItems.length){
        currentIndex = 0;
    }
    displayMenuItem();
}

function prevImage() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = filteredMenuItems.length - 1;
    }
    displayMenuItem();
}

if(prevButton && nextButton){

    prevButton.addEventListener("click", prevImage)

    nextButton.addEventListener("click", nextImage)
}
//

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

        if (name.length > 20) {
            showAlert("Name must be 20 characters or less.", "danger");
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

        console.log(JSON.stringify(reservation));

        showAlert(
            `Thank you, ${name}! Your reservation for ${guests} guest(s) has been submitted.`,
            "success"
        );

    });
}

