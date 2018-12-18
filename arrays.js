
//var namesArray = ['anu','tanu','manu','banu'];
var namesArray = ["anu"];

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
