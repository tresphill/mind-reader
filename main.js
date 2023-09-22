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
    let page = state.pages[pageNum];
    headerText.innerText = page.headerText;
    parText.innerText = page.parText;
    btnClick.innerText = page.btnClick;

    if (page.symbols) {
        parText.innerText = page.parText + " " + page.symbols;
    }

    rstClick.style.visibility = "hidden";
}

function increment() {
    if (pageNum === state.pages.length - 1) {
       // state.pages[pageNum].symbols = getRandomSymbol();//
       console.log("increment")
        pageNum = 0; // Reset pageNum to 0 when reaching the end
    } else {
        pageNum++;
    }
    renderPage();
}
const secretSymbol = getRandomSymbol(symbols);

// set my state as a variable
let state = {
    pages: [
        {
            headerText: "Bet I can read your mind.",
            parText: "",
            btnClick: "GO",
        },
        {
            headerText: "Pick a number between 01-99 then",
            parText: "When you have your number, click Next",
            btnClick: "Next",
        },
        {
            headerText: "Add both digits together to get a new number.",
            parText: "Example: 14 is 1 + 4 = 5",
            btnClick: "Next",
        },
        {
            headerText: "Subtract new number from original number.",
            parText: "Example: 14 - 5 = 9",
            btnClick: "Next",
        },
        {
            symbols: [],
            parText: "Find your new number. Note the symbol.",
            btnClick: "Reveal",
        },
        {
            headerText: "Your symbol is...",
            parText: secretSymbol,
            btnClick: "Reset",
        }
    ]
};



function getRandomSymbol(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];

}



for (let i = 0; i < 99; i++) {
    const randomSymbol = getRandomSymbol(symbols)
    if (i % 9 === 0) {
        state.pages[4].symbols.push("\n" + i + " = " + secretSymbol);
    }
    else {
        state.pages[4].symbols.push("\n" + i + " = " + randomSymbol);

    }

}


btnClick.addEventListener('click', increment);
