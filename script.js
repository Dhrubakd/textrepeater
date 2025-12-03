function repeatSorry() {
    let num = parseInt(document.getElementById('num').value) || 0;
    let text = document.getElementById('textInput').value || '';
    let separators = Array.from(document.querySelectorAll('input[name="separator"]:checked')).map(cb => cb.value);

    // Convert NEWLINE token to actual newline character and join all selected separators
    let sepStr = '';
    if (separators.length > 0) {
        sepStr = separators.map(sep => sep === 'NEWLINE' ? '\n' : sep).join('');
    }

    let displayText = '';
    for (let i = 0; i < num; i++) {
        displayText += text;
        // Add separator after each item including the last one
        if (sepStr) {
            displayText += sepStr;
        }
    }

    document.getElementById('outputContent').textContent = displayText;
    // Update summary
    const summaryEl = document.getElementById('summary');
    if (summaryEl) {
        const chars = displayText.length;
        const words = displayText.trim() ? displayText.trim().split(/\s+/).length : 0;
        summaryEl.textContent = `Items: ${num} · Chars: ${chars} · Words: ${words}`;
    }
}

function copyOutput() {
    const outputText = document.getElementById('outputContent').textContent;
    navigator.clipboard.writeText(outputText);
}

function clearOutput() {
    document.getElementById('outputContent').textContent = '';
}

function sendToWhatsApp() {
    const outputText = document.getElementById('outputContent').textContent;
    const url = 'https://wa.me/?text=' + encodeURIComponent(outputText);
    window.open(url, '_blank');
}

function sendToViber() {
    const outputText = document.getElementById('outputContent').textContent;
    const url = 'viber://forward?text=' + encodeURIComponent(outputText);
    window.open(url, '_blank');
}

function sendToMessenger() {
    const outputText = document.getElementById('outputContent').textContent;
    const url = 'fb-messenger://share/?text=' + encodeURIComponent(window.location.href) + '&app_id=YOUR_APP_ID';
    window.open(url, '_blank');
}

function setPreset(txt) {
    const el = document.getElementById('textInput');
    if (el) el.value = txt;
}