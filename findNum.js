function findNum(a){
    let smallest = Math.min(...a);
    let largest = Math.max(...a);
    let uniqueArray = [...new Set(a)];
  
    console.log(uniqueArray)
  
    if(largest <= 0)
    return 1;
  
    for(let i = smallest ; i < largest ; i++){
      if(!uniqueArray.includes(i))
        return i;
    }
  
    return ++largest;
  }
  
  console.log(findNum([1, 3, 6, 4, 1, 2])) // 5
  console.log(findNum([1, 2, 3])) // 4
  console.log(findNum([-1, -3])) // 1
  