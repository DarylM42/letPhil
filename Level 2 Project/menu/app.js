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

const treatSelect = document.getElementById("treat-select");
const quantityInput = document.getElementById("order-quantity");
const placeOrderButton = document.getElementById("place-order-button");
const orderMessage = document.getElementById("order-message");
const orderList = document.getElementById("order-list");
const clearOrderHistoryButton = document.getElementById("clear-order-history-button");

let orders = [];

function loadOrders() {
    const savedOrders = localStorage.getItem("bakeryOrders");

    if (savedOrders === null) {
        orders = [];
        return;
    } else {
        orders = JSON.parse(savedOrders);
    }
}

function getRemainingStock(treat) {
    let quantityOrdered = 0;

    for (let i = 0; i < orders.length; i++) {
        if (orders[i].treatId === treat.id) {
            quantityOrdered = quantityOrdered + orders[i].quantity;
        }
    }

    return treat.stock - quantityOrdered;
}

function renderTreatOptions() {
    treatSelect.textContent = "";

    const firstOption = document.createElement("option");
    firstOption.value = "";
    firstOption.textContent = "Select a treat";
    treatSelect.appendChild(firstOption);

    for (let i = 0; i < treats.length; i++) {
        const treat = treats[i];
        const remainingStock = getRemainingStock(treat);

        if (treat.isAvailable && remainingStock > 0) {
            const option = document.createElement("option");
            option.value = treat.id;
            option.textContent = 
                treat.name + " - $" + treat.price + " (" + remainingStock + " available)";
            treatSelect.appendChild(option);
        }
    }
}

function renderOrderHistory() {
    orderList.textContent = "";

    if (orders.length === 0) {
        const listItem = document.createElement("li");
        listItem.textContent = "No orders yet.";
        orderList.appendChild(listItem);
        return;
    }

    for (let i = 0; i < orders.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = 
            orders[i].quantity + " x " +
            orders[i].treatName + " - $" +
            orders[i].totalPrice.toFixed(2);

        orderList.appendChild(listItem);
    }
}

function handlePlaceOrder() {
    const treatId = Number(treatSelect.value);
    const quantity = Number(quantityInput.value);
    let selectedTreat = null;

    for (let i = 0; i < treats.length; i++) {
        if (treats[i].id === treatId) {
            selectedTreat = treats[i];
        }
    }

    if (selectedTreat === null) {
        orderMessage. textContent = "Please choose a treat.";
        return;
    } else if (!Number.isInteger(quantity) || quantity < 1) {
        orderMessage.textContent = "Enter a quantity of at least 1.";
        return;
    }

    const remainingStock = getRemainingStock(selectedTreat);

    if (quantity > remainingStock) {
        orderMessage.textContent = "Only " + remainingStock + " are available.";
        return;
    }

    const newOrder = {
        treatId: selectedTreat.id,
        treatName: selectedTreat.name,
        quantity: quantity,
        totalPrice: selectedTreat.price * quantity
    };

    orders.push(newOrder);
    localStorage.setItem("bakeryOrders", JSON.stringify(orders));

    orderMessage.textContent = 
        "Order placed: " + quantity + " x " + selectedTreat.name +
        " - $" + newOrder.totalPrice.toFixed(2);

    renderTreatOptions();
    renderOrderHistory();
}

function handleClearOrderHistory() {
    if (orders.length === 0) {
        orderMessage.textContent = "There is no order history to clear.";
        return;
    }

    const shouldClear = confirm("Are you sure you want to clear the order history?");

    if (shouldClear) {
        orders = [];
        localStorage.setItem("bakeryOrders", JSON.stringify(orders));

        renderTreatOptions();
        renderOrderHistory();

        orderMessage.textContent = "Order history cleared.";
    }
}

function startOrderPage() {
    loadOrders();
    renderTreatOptions();
    renderOrderHistory();

    placeOrderButton.addEventListener("click", handlePlaceOrder);
    clearOrderHistoryButton.addEventListener("click", handleClearOrderHistory);
}

startOrderPage();