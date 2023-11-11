function solve(word,text){
let wordsArray=text.toLowerCase().split(' ');
let output=`${word} not found!`; 
for (let i = 0; i < wordsArray.length; i++) {
    let currentElement = wordsArray[i];
    if(currentElement===word){
        output=currentElement;
    }
    
}
 console.log(output);
}

solve('javascript',
'JavaScript is the best programming language'
);