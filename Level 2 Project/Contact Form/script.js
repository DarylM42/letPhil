const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone-number").value.trim();
    const email = document.getElementById("email-address").value.trim();
    const message = document.getElementById("questions-comments").value.trim();

    if (
        name.length === 0 ||
        phone.length === 0 ||
        email.length === 0 ||
        message.length === 0
    ) {
        formMessage.textContent = "Please complete every field.";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    const savedMessage = localStorage.getItem("contactMessages");
    let contactMessages = [];

    if (savedMessage !== null) {
        contactMessages = JSON.parse(savedMessage);
    }

    const newMessage = {
        name: name,
        phone: phone,
        email: email,
        message: message
    };

    contactMessages.push(newMessage);
    localStorage.setItem("contactMessages", JSON.stringify(contactMessages));

    formMessage.textContent = "Thank you! Your message has been saved.";
    contactForm.reset();
}

contactForm.addEventListener("submit", handleFormSubmit);