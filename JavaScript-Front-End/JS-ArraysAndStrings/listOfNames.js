function solve(list){
  list.sort((a,b) =>a.localeCompare(b));

  let index=1;
  for (const name of list) {
    console.log(`${index}.${name}`);
    index++;
  }
}

solve(["John", "Bob", "Christina", "Ema"]);