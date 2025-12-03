function repeatSorry() {
    let num = parseInt(document.getElementById('num').value);
    let text = document.getElementById('textInput').value;
    let output = '';
    for(let i = 0; i < num; i++) {
        output += text + '<br>';
    }
    document.getElementById('outputContent').innerHTML = output;
}

function copyOutput() {
    const outputText = document.getElementById('outputContent').innerText;
    navigator.clipboard.writeText(outputText);
}

function clearOutput() {
    document.getElementById('outputContent').innerHTML = '';
}