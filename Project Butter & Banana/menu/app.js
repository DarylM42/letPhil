const treats = [
    { 
        id: 1,
        name: "Classic Banana Bread",
        category: "Breads",
        price: 17.99, // placeholder value
        stock: 5, // placeholder value
        isAvailable: true
    },
    { 
        id: 2,
        name: "Chocolate Chip Banana Bread",
        category: "Breads",
        price: 19.99, // placeholder value
        stock: 10, // placeholder value
        isAvailable: true
    },
    { 
        id: 3,
        name: "Walnut Banana Bread",
        category: "Breads",
        price: 18.99, // placeholder value
        stock: 0, // placeholder value
        isAvailable: false
    },
    { 
        id: 4,
        name: "Honey Vanilla Banana Bread",
        category: "Breads",
        price: 21.99, // placeholder value
        stock: 5, // placeholder value
        isAvailable: true
    },
    { 
        id: 5,
        name: "Sunshine Lemon Banana Bread",
        category: "Breads",
        price: 25.99, // placeholder value
        stock: 10, // placeholder value
        isAvailable: true
    },
    { 
        id: 6,
        name: "Golden Butter Pecan Loaf",
        category: "Breads",
        price: 19.99, // placeholder value
        stock: 0, // placeholder value
        isAvailable: false
    },
    {
        id: 7,
        name: "Midnight Chunk",
        category: "Signature Cookies",
        price: 5.99,
        stock: 3,
        isAvailable: true
    },
    {
        id: 8,
        name: "Warm Hug Peanut Butter",
        category: "Signature Cookies",
        price: 7.99,
        stock: 8,
        isAvailable: true
    },
    {
        id: 9,
        name: "Golden Butter Pecan",
        category: "Signature Cookies",
        price: 9.99,
        stock: 3,
        isAvailable: true
    },
    {
        id: 10,
        name: "Sunshine Lemon Sugar",
        category: "Signature Cookies",
        price: 14.99,
        stock: 0,
        isAvailable: false
    },
    {
        id: 11,
        name: "Brown Sugar Shortbread",
        category: "Signature Cookies",
        price: 11.99,
        stock: 3,
        isAvailable: true
    },
    {
        id: 12,
        name: "Strawberry Blush Linzer",
        category: "Sandwich Cookies",
        price: 29.99,
        stock: 3,
        isAvailable: true
    },
    {
        id: 13,
        name: "Dulce de Leche Linzer",
        category: "Sandwich Cookies",
        price: 31.99,
        stock: 0,
        isAvailable: false
    },
    {
        id: 14,
        name: "Lemon Bars",
        category: "Bars & Squares",
        price: 21.99,
        stock: 5,
        isAvailable: true
    },
    {
        id: 15,
        name: "Lemon Blueberry Squares",
        category: "Bars & Squares",
        price: 23.99,
        stock: 4,
        isAvailable: true
    },
    {
        id: 16,
        name: "Coffee Cake Squares",
        category: "Bars & Squares",
        price: 25.99,
        stock: 0,
        isAvailable: false
    },
    {
        id: 17,
        name: "Pecan Squares",
        category: "Bars & Squares",
        price: 33.99,
        stock: 2,
        isAvailable: true
    }
];

const categorySelect = document.querySelector("#category-select");
const treatSelect = document.querySelector("#treat-select");
const treatDetails = document.querySelector("#treat-details");
const addToCartButton = document.querySelector("#add-to-cart");
const cartMessage = document.querySelector("#cart-message");

const categories = [...new Set(treats.map((treat) => treat.category))];

categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.append(option);
});

categorySelect.addEventListener("change", () => {
    const selectedCategory = categorySelect.value;
    const categoryTreats = treats.filter((treat) => treat.category === selectedCategory);

    treatSelect.replaceChildren();
    treatDetails.textContent = "Select a treat to see its details.";
    addToCartButton.disabled = true;
    cartMessage.textContent = "";

    if (!selectedCategory) {
        treatSelect.disabled = true;
        treatSelect.append(new Option("Select a category first", ""));
        return;
    }

    treatSelect.disabled = false;
    treatSelect.append(new Option("Select a treat", ""));

    categoryTreats.forEach((treat) => {
        const option = document.createElement("option");
        option.value = treat.id;
        option.textContent = treat.name;
        treatSelect.append(option);
    });
});

treatSelect.addEventListener("change", () => {
    const selectedTreat = treats.find((treat) => treat.id === Number(treatSelect.value));

    if (!selectedTreat) {
        treatDetails.textContent = "Select a treat to see its details.";
        addToCartButton.disabled = true;
        return;
    }

    const availability = selectedTreat.isAvailable
        ? `Available: ${selectedTreat.stock} in stock`
        : "Currently unavailable";

    treatDetails.innerHTML = `<strong>${selectedTreat.name}</strong><br>$${selectedTreat.price.toFixed(2)} &middot; ${availability}`;
    addToCartButton.disabled = false;
    cartMessage.textContent = "";
});

addToCartButton.addEventListener("click", () => {
    const selectedTreat = treats.find((treat) => treat.id === Number(treatSelect.value));

    if (!selectedTreat) {
        cartMessage.textContent = "Please select a treat before adding it to your cart.";
        cartMessage.className = "cart-message unavailable";
        return;
    }

    if (!selectedTreat.isAvailable || selectedTreat.stock === 0) {
        cartMessage.textContent = `${selectedTreat.name} is currently unavailable.`;
        cartMessage.className = "cart-message unavailable";
        return;
    }

    cartMessage.textContent = `${selectedTreat.name} was added to your cart.`;
    cartMessage.className = "cart-message success";
});
