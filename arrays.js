
var namesArray = ['anu','banu','tanu'];

console.log('Array : '+ namesArray);

var namesString = arrayToString(namesArray);

console.log('String : ' + namesString);

function arrayToString(givenNamesArray) {

        if(givenNamesArray.length > 1) {
                let lastName = givenNamesArray.pop();
                lastName =   ' and '+lastName;
                givenNamesArray = givenNamesArray.toString()+','  + lastName;
                
        }  
        
        return givenNamesArray;
} 
