// set variables
let headerText = document.getElementById("headerText");
let parText = document.getElementById("parText");
let btnClick = document.getElementById("btnClick");
let rstClick = document.getElementById("rstClick");
let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "+"];
let scrollSymbol = document.getElementById("scrollSymbol");

let pageNum = 0;

// Set event listener to load function on start up
window.onload = renderPage;

function renderPage() {
    let pages = state.pages[pageNum];
    headerText.innerText = pages.headerText;
    parText.innerText = pages.parText;
    btnClick.innerText = pages.btnClick;

    if (pages.symbol) {
        parText.innerText = pages.parText + " " + pages.symbol;
    }

    rstClick.style.visibility = "hidden";
}

function increment() {
    if (pageNum === state.pages.length - 1) {
        state.pages[pageNum].symbol = getRandomSymbol();
        pageNum = 0; // Reset pageNum to 0 when reaching the end
    } else {
        pageNum++;
    }
    renderPage();
}

// set my state as a variable
let state = {
    pages: [
        {
            headerText: "I can read your mind",
            parText: "",
            btnClick: "GO",
        },
        {
            headerText: "Pick a number between 01-99",
            parText: "When you have your number, click Next",
            btnClick: "Next",
        },
        {
            headerText: "Add both digits together to get a new number",
            parText: "Example: 14 is 1 + 4 = 5",
            btnClick: "Next",
        },
        {
            headerText: "Subtract your new number from your original number",
            parText: "Example: 14 - 5 = 9",
            btnClick: "Next",
        },
        {
            headerText: "",
            parText: "Find your new number. Note the symbol beside your number",
            btnClick: "Reveal",
        },
        {
            headerText: "Your symbol is...",
            parText: "",
            rstClick: "Reset"
        }
    ]
};

function increment() {
    if (pageNum === state.pages.length - 1) {
        state.pages[pageNum].symbol = getRandomSymbol();
        pageNum = 0; // Reset pageNum to 0 when reaching the end
    } else {
        pageNum++;
    }
    renderPage();
}


function getRandomSymbol() {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
}

btnClick.addEventListener('click', increment);
