//set variables

let headerText = document.getElementById("headerText"); //header text that changes when pages cycle
let parText = document.getElementById("parText"); //the paragraph text giving alternate instructions and examples
let btnClick = document.getElementById("btnClick"); //this button cycles through the pages
let rstClick = document.getElementById("rstClick");//this button resets to page one
let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "+"] //the list of symbols to choose from

//set eventlistener to load function on start up

window.onload = renderPage 

pageNum = 0

function renderPage() { //this function calls to the window load and loads first page
    let pages = state.pages[pageNum];
    headerText.innerText = pages.headerText;
    parText.innerText = pages.parText;
    btnClick.innerText = pages.btnClick;
    rstClick.style.visibility = "hidden";
    pageNum++ //incrementing up by one, cycles to next page
}

//set my state as a variable
//set my arrays to the pages array

let state = { //let variable with mulitple arrays set as pages
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
            parText: "&",
            rstClick: "Reset"
        }
    ]
}

function increment() { //the function that cycles through my pages
    renderPage() //variable that calls to the page incrementation
}


btnClick.addEventListener('click', increment) //this gives my button function to cycle to next page