function subtraction(arr){
    let evenSubtraction=0;
    let oddSubtraction=0;
    for (let index = 0; index < arr.length; index++) {
        const currentElement = Number(arr[index]);
        const isEven = currentElement%2===0;
        if(isEven){
            evenSubtraction+=currentElement;
        }else{
            oddSubtraction+=currentElement;
        }
        
    }
    console.log(evenSubtraction-oddSubtraction);

}
subtraction([1,2,3,4,5,6])