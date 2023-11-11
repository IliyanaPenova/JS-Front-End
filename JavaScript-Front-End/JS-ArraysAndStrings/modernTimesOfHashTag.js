function solve(text){
let regex=/#[A-z]+/gm;
let matches=text.match(regex);
for (let word of matches) {
    word=word.replace('#','');
    console.log(word);
}
}
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');