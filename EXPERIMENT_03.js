let fontSize = 16;
let isVisible = true;

// Change Heading
function changeHeading() {
    let input = document.getElementById("inputText").value;
    if (input !== "") {
        document.getElementById("heading").innerText = input;
    }
}

// Change Background Color
function changeBackground() {
    let colors = ["#f8d7da", "#d4edda", "#d1ecf1", "#fff3cd", "#e2e3e5"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Increase Font Size
function increaseFont() {
    fontSize += 2;
    document.getElementById("para").style.fontSize = fontSize + "px";
}

// Show/Hide Paragraph
function toggleParagraph() {
    let para = document.getElementById("para");

    if (isVisible) {
        para.style.display = "none";
    } else {
        para.style.display = "block";
    }

    isVisible = !isVisible;
}

// Reset Page
function resetPage() {
    document.getElementById("heading").innerText = "Welcome to JavaScript Lab";
    document.getElementById("inputText").value = "";
    document.getElementById("para").style.fontSize = "16px";
    document.getElementById("para").style.display = "block";
    document.body.style.backgroundColor = "white";

    fontSize = 16;
    isVisible = true;
}