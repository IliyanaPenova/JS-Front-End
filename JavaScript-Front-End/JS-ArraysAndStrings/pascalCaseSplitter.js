function solve(text){
    let regex=/[A-Z][a-z]*/gm;
    let matches=text.match(regex);
    console.log(matches.join(', '));

}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');