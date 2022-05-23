
// incrementing funciton


function counter(element) {
        element.innerText++;
        console.log("changed text to: " + element.innerText);
}

function specialCounter(element) {
    document.querySelector("#number").innerText++;
    console.log("Changed text to: " + element.innerText);
}