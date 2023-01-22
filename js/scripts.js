// Business Logic

function robot(event) {
    event.preventDefault();
    const num = parseInt(document.querySelector("input#xNum").value)
    const prompt = num.toString();
    let result = [];
    if (isNaN(document.querySelector("input#xNum").value)) {
        document.getElementById("selected-count").innerHTML = "Please enter a number."
    } else if (num < 0) {
        document.getElementById("selected-count").innerHTML = "Please enter a non-negavtive number."
    } else if (num > 1000) {
        document.getElementById("selected-count").innerHTML = "Please enter a number less than or equal to 1000."
    } else {
        for (let i = 0; i <= num; i++) {
            if (i.toString().includes("3")) {
                result.push(" Won't you be my neighbor?");
            } else if (i.toString().includes("2")) {
                result.push(" boop");
            } else if (i.toString().includes("1")) {
                result.push(" beep");
            } else {
                result.push(" " + i.toString());
            }
        }
        document.getElementById("selected-count").innerHTML = result;
    }
}    
    
// UI Logic

window.addEventListener("load", function () {
    const num = parseInt(document.querySelector("input#xNum").value)
    const wordCounter = document.getElementById("wordCounter");
    if (isNaN(document.querySelector("input#xNum").value)) {
        document.getElementById("selected-count").innerHTML = "Please enter a number."
    } else if (num < 0) {
        document.getElementById("selected-count").innerHTML = "Please enter a non-negavtive number."
    } else if (num > 1000) {
        document.getElementById("selected-count").innerHTML = "Please enter a number less than or equal to 1000."
    } else {
        wordCounter.addEventListener("submit", robot);
    }

});
