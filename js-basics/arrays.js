
var namesArray = ['anu','tanu','manu','banu'];

console.log('Array : '+ namesArray);

var namesString = arrayToString(namesArray);

console.log('String : ' + namesString);

function arrayToString(givenNamesArray) {
        let lastName = givenNamesArray.pop();
        let lastButOneName = givenNamesArray.pop(givenNamesArray.length-1,givenNamesArray.length);
        lastButOneName = ', '+lastButOneName + ' and  ';
        givenNamesArray = givenNamesArray.toString() + lastButOneName + lastName;
        return givenNamesArray;
           
} 
