function jsObjects(input){
    input=input.toLowerCase();
    let arrOfElements=input.split(" ");
    let map=new Map();
    arrOfElements.forEach(element => {
        if(map.has(element)){
           let oldValue=map.get(element);
           let newValue=oldValue+1;
           map.set(element,newValue);
        }else{
            map.set(element,1);
        };
    });
    let result=[];
    map.forEach((value,key)=>{
       if(value%2 !== 0){
        result.push(key);
       }
    });
    console.log(result.join(" "));
}
jsObjects('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');