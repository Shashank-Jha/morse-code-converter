var inputTxt = document.querySelector("#input-txt");
var outputTxt = document.querySelector("#encoded-txt");
var btnTranslate = document.querySelector("#btn-translate");
var btnReset = document.querySelector("#btn-reset");

var morseURL = "https://api.funtranslations.com/translate/morse.json";


function getURL(text) {
    var encodeURL = morseURL + "?text=" + text;
    return encodeURI(encodeURL);

};

function catchHandler(error) {
    console.log("error occured", error);
    alert("Something went wrong, Please try again later sometime");
}

function translationHandler() {
    var simpleInput = inputTxt.value;
    fetch(getURL(simpleInput))
        .then(response => response.json())
        .then(json => {
            var morseCode = json.contents.translated;
            outputTxt.innerText = morseCode;
        })
        .catchHandler(error);
};

function resetHandler() {
    inputTxt.value = "";
    outputTxt.innerText = "⚆_⚆";
};

btnTranslate.addEventListener("click", translationHandler);
btnReset.addEventListener("click", resetHandler);
