
 let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

 let newArray = arr.filter(function(elem) {
     if (elem > 1 && elem % 3 !== 0 && elem % 2 !== 0 || elem == 2|| elem==3) {
         return elem;
     };
 
 });
 console.log(newArray);
 
 let sumArray = newArray.reduce(function(sum, curr) {
     return sum + curr;
 });
 console.log(sumArray); 




//второй вариант
 let filArray = arr.filter(function(elem) {
    if(elem==1){
      return false;
    }     
    for(let i=2; i*i<=elem; i++){  
      if(elem % i == 0){
        return false;
      }      
    }
    return elem;  
  });
  console.log(filArray);

 let sumArr = filArray.reduce(function(sum, curr) {
    return sum + curr;
  });
  console.log(sumArr);  
  