function recursivelyAdd(numbers){
    if(numbers.length===0){
    return 0;
    }
    return numbers[0] + recursivelyAdd(numbers.slice(1));
    }
    const numbers=[1,2,4,5,7,8,9];
    const output=recursivelyAdd(numbers);
    console.log(output);