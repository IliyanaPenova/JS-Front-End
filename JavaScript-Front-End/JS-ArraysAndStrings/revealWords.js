function solve(words,sentence){
    let wordsArr=words.split(", ");
    let textArr=sentence.split(" ");
    for (let i = 0; i < wordsArr.length; i++) {
        for (let j = 0; j < textArr.length; j++) {
            if(textArr[j].includes("*") &&
             textArr[j].length===wordsArr[i].length){
               textArr[j]= wordsArr[i];
            }
            
        }
    }
    console.log(textArr.join(" "));

}

solve('great, learning',
'softuni is ***** place for ******** new programming languages'
);