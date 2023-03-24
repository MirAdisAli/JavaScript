// const year = 3588;
// console.log(year / 4);
// console.log(year % 4);

// const year = 3588;
// let remainder = year %4;
// console.log(remainder == 0);


const year = 3588;
let remainder = year %4;
if(remainder == 0){
    console.log('This is a Leap Year');
}else{
    console.log('This is not a Leap Year');
}

function isLeapYear(year){
    const remainder = year %4;
    if(remainder == 0){
        return true;
    } else{
        return false;
    }
}

const check2000 = isLeapYear(2000);
console.log(check2000);






