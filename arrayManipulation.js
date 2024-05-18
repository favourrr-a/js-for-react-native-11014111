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

export function formatArrayStrings(arrayOfStrings, arrayOfNumbers) {
    if (arrayOfStrings.length !== arrayOfNumbers.length) {
        throw new Error("The lengths of the two arrays must be equal.");
    }

    let processedNumbers = processArray(arrayOfNumbers);
    let formattedArrayOfStrings = arrayOfStrings.map((string, index) => {
        if (processedNumbers[index] % 2 === 0) {
            return string.toUpperCase();
        } else {
            return string.toLowerCase();
        }
    });
    return formattedArrayOfStrings;
}

let randomNumbers = [1, 4, 5, 6, 7];
let randomStrings = ["Corvette", "Cybertruck", "Porsche-911", "Wrangler", "Model 3"]


// Task 1 sample usage
console.log(`Random Numbers: ${randomNumbers}\nProcessed array of Random Numbers: ${processArray(randomNumbers)}`);

// Task 2 sample usage
console.log(`Random Strings: ${randomStrings}\nFormatted array of Random Strings: ${formatArrayStrings(randomStrings, randomNumbers)}`);