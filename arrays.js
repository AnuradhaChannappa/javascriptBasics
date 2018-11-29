
var namesArray = ['anu','banu','tanu'];

console.log('Array : '+ namesArray);

var namesString = arrayToString(namesArray);

console.log('String : ' + namesString);

function arrayToString(givenNamesArray) {

        if(givenNamesArray.length > 1) {
                let lastName = givenNamesArray.pop();
               // let lastButOneName = givenNamesArray.pop(givenNamesArray.length-1,givenNamesArray.length);
                lastName =   ' and '+lastName;
                givenNamesArray = givenNamesArray.toString()+','  + lastName;
                
        }  
        
        return givenNamesArray;
} 
