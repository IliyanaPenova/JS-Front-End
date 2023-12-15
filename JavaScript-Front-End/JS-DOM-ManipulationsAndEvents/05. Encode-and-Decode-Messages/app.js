function encodeAndDecodeMessages() {
    let textAreas = Array.from(document.querySelectorAll('textarea'));
    let buttons = Array.from(document.querySelectorAll('button'));

    let sendText = textAreas[0];
    let sendBtn = buttons[0];
    sendBtn.addEventListener('click', encode);

    let receivedText = textAreas[1];
    let receiveBtn = buttons[1];
    receiveBtn.addEventListener('click', decode);

    function encode(e) {
        let newText = '';
        for (let i = 0; i < sendText.value.length; i++) {
            let chr = sendText.value.charCodeAt(i) + 1;
            newText += String.fromCharCode(chr);
        }

        sendText.value = '';
        receivedText.value = newText;
    }

    function decode(e) {
        let newText = '';
        for (let i = 0; i < receivedText.value.length; i++) {
            let chr = receivedText.value.charCodeAt(i) - 1;
            newText += String.fromCharCode(chr);
        }

        receivedText.value = newText;
    }
}