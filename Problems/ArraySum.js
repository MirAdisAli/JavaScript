// var numbers = [45, 65, 78, 12, 3, 54, 65];
// var sum = 0;

// for(var i = 0; i <numbers.length; i++){
//     var element = numbers[i];
//     sum = sum + element;
// }
// console.log("Total of the numbers: ", sum);


var numbers = [45, 65, 78, 12, 3, 54, 65];

function getArraySum(numbers){
    var sum = 0;

    for(var i = 0; i <numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var result = getArraySum(numbers);
console.log("Total of the numbers: ", result);

var total = getArraySum([54, 86, 96, 35, 97]);
console.log("Total of the numbers: ", total);
