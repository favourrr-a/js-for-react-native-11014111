import {formatArrayStrings} from './arrayManipulation.js';

let randomStringsArray = ["Bill", "Elon", "Jeff ", "Steve"];
let randomNumbersArray = [1, 2, 3, 4];
let formattedRandomStringsArray = formatArrayStrings(randomStringsArray, randomNumbersArray);
function createUserProfiles(arrayOfStrings, formattedArrayOfStrings){
    
    let arrayOfObjects = [];
    for(let i = 0; i < arrayOfStrings.length; i++){
        let objectContent = {
            originalName: arrayOfStrings[i],
            modifiedName: formattedArrayOfStrings[i],
            id: i+1
        };
        arrayOfObjects.push(objectContent);
    }
    
    return (arrayOfObjects);

}

console.log(createUserProfiles(randomStringsArray, formattedRandomStringsArray))