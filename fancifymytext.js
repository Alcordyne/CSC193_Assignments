function showBigger() {

    document.getElementById("text").style.fontSize = "24pt";
    alert("Font size increased");
}

function showFancy() {
    
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";
    document.getElementById("text").style.fontWeight = "bold";
    alert("Text Fancy");
}

function showUnbold() {

    document.getElementById("text").style.fontWeight = "normal";
    alert("Text Unbold");
}

function showMoo() {
    
    textArea = document.getElementById("text");
    textArea.value = textArea.value.toUpperCase();

    var sentences = textArea.value.split(".");
    textArea.value = sentences.join("-Moo.");
}