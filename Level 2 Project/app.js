const QUOTE_API = "https://dummyjson.com/quotes/random";

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteButton = document.getElementById("new-quote-button");

async function loadQuote() {
    quoteText.textContent = "Loading a sweet thought...";
    quoteAuthor.textContent = "";
    newQuoteButton.disabled = true;

    try {
        const response = await fetch(QUOTE_API);

        if (!response.ok) {
            throw new Error("HTTP " + response.status + ": " + response.statusText);
        }

        const data = await response.json();

        quoteText.textContent = '"' + data.quote + '"';
        quoteAuthor.textContent = "- " + data.author;
    } catch (error) {
        quoteText.textContent = "Sorry, we couldn't load a quote right now.";
        console.log(error.message);
    }

    newQuoteButton.disabled = false;
}

function handleTitleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function startHomePage() {
    loadQuote();
    newQuoteButton.addEventListener("click", loadQuote);
    document.getElementById("site-title").addEventListener("click", handleTitleClick);
}

startHomePage();