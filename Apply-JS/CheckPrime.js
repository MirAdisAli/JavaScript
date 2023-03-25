// var n = 79;

// for(i=2; i<n; i++){
//     //console.log(i, n % i);

//     if(n%i == 0){
//         console.log('Not a prime number');
//         break;
//     }
// }


function isPrime(n) {
     for(i=2; i<n; i++){
         if(n%i == 0){
        return 'Not a prime number';
    }
  }
  return 'It is a Prime Number';
}
var result = isPrime(139);
console.log(result);


