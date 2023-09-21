//set variables

let headerText = document.getElementById("headerText");
let parText = document.getElementById("parText");
let btnClick = document.getElementById("btnClick");
let rstClick = document.getElementById("rstClick");
let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "+"]

//set eventlistener to load function on start up

window.onload = renderPage

pageNum = 0

function renderPage() {
    let pages = state.pages[pageNum];
    headerText.innerText = pages.headerText;
    parText.innerText = pages.parText;
    btnClick.innerText = pages.btnClick;
    rstClick.style.visibility = "hidden";
    pageNum++
}

//set my state
//set my arrays

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
            rstClick: "Reset",
        },
        {
            headerText: "Add both digits together to get a new number",
            parText: "Example: 14 is 1 + 4 = 5",
            btnClick: "Next",
            rstClick: "Reset",
        },
        {
            headerText: "Subtract your new number from your original number",
            parText: "Example: 14 - 5 = 9",
            btnClick: "Next",
            rstClick: "Reset",
        },
        {
            headerText: "",
            parText: "Find your new number. Note the symbol beside your number",
            btnClick: "Reveal",
        },
        {
            headerText: "Your symbol is...",
            parText: "&",
            rstClick: "Reset"
        }
    ]
}

function increment() {
    renderPage()
}


btnClick.addEventListener('click', increment)