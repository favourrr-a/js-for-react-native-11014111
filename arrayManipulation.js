function processArray(arrayOfNumbers){
    let newArray = [];
    for(let i  = 0; i < arrayOfNumbers.length; i++){
        if(arrayOfNumbers[i]%2 === 0){
            newArray.push((arrayOfNumbers[i])*(arrayOfNumbers[i]));
        }
        else{
            newArray.push((arrayOfNumbers[i])*3);
        }
    }
    return newArray;
}

let randomNumbers = [1, 4, 5, 6, 7];

// Task 1 sample usage
console.log(`Random Numbers: ${randomNumbers}\nProcessed array of Random Numbers: ${processArray(randomNumbers)}`);