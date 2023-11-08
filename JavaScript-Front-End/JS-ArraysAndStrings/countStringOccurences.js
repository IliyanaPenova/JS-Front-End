function strOccurrence(str,word){
let text=str.split(" ");
let counter=0;

for (const searchWord of text) {
    if (searchWord=== word)
     counter++
    }
    console.log(counter);
}

