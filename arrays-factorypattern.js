function convertArrayToString(){
    
  return {
    convert(givenNamesArray) {
        if(givenNamesArray.length > 1) {
            let lastName = givenNamesArray.pop();
            lastName =   ' and '+lastName;
            givenNamesArray = givenNamesArray.toString()+','  + lastName;
        } 
        return givenNamesArray;
      }
    }
  }
const arrayToString1 = new convertArrayToString();
let namesString1 = arrayToString1.convert(['anu','manu','tanu','banu']);
console.log(namesString1);

const arrayToString2 = new convertArrayToString();
let namesString2 = arrayToString2.convert(['anu','ani','chytu','harsha']);
console.log(namesString2);



