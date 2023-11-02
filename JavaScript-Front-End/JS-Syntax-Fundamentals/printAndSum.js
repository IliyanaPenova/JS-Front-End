function sum(num1,num2){
    let buff="";
    let finalSum=0;
 for (let index = num1; index <=num2; index++) {
      buff+=index+" ";
      finalSum+=index;
 }
 console.log(buff);
 console.log(`Sum: ${finalSum}`);
}

sum(5,10)

