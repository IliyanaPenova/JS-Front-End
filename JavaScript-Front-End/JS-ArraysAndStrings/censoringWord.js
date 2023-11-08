function censoringWord(text, word) {

    while (text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length));
    }
    console.log(text);
}

censoringWord("Hello word Hello","Hello")