var friendsAge = [15, 17, 14, 16];
console.log(friendsAge)

var friendsAge = [15, 17, 14, 16];
console.log(friendsAge[2])

var friendsAge = [15, 17, 14, 16];
var sonaliAge = friendsAge[1];
console.log(sonaliAge)

var friendsAge = [15, 17, 14, 16];
friendsAge [1] = 21;
console.log(friendsAge)

var friendsAge = [15, 17, 14, 16];
var position = friendsAge.indexOf(14);
console.log(position)

var friendsAge = [15, 17, 14, 16];
var position = friendsAge.indexOf(135);
console.log(position)

var friendsAge = [15, 17, 14, 16];
console.log(friendsAge);
friendsAge.push(15);
friendsAge.push(20);
console.log(friendsAge);

var friendsAge = [15, 17, 14, 16];
console.log(friendsAge.length);
friendsAge.push(15);
friendsAge.push(20);
console.log(friendsAge.length);

var friendsAge = [15, 17, 14, 16];
console.log(friendsAge);
friendsAge.push(15);
friendsAge.push(20);
friendsAge.push(19);
console.log(friendsAge);
friendsAge.pop();
console.log(friendsAge);

var friendsAge = [15, 17, 14, 16];
friendsAge.unshift(12);
console.log(friendsAge);

var friendsAge = [12, 15, 17, 14, 16];
friendsAge.shift();
console.log(friendsAge);

var teaLine = ['Kamal', 'Salam', 'Iqbal'];
teaLine.push('Jamil');
console.log(teaLine);
teaLine.pop();
console.log(teaLine);

var teaLine = ['Kamal', 'Salam', 'Iqbal'];
teaLine.unshift('Jamil');
console.log(teaLine);
teaLine.shift('Jamil');
console.log(teaLine);

var teaLine = ['Jamil', 'Kamal', 'Salam', 'Iqbal'];
var part = teaLine.slice(2);
console.log(part);

var teaLine = ['Jamil', 'Kamal', 'Salam', 'Iqbal'];
var part = teaLine.slice(1, 3);
console.log(part);

var teaLine = ['Jamil', 'Kamal', 'Salam', 'Iqbal'];
var part = teaLine.splice(2, 2);
console.log(part);

/*/var num = 0;
while (num<15){
    console.log(num);
    num++;
}/*/

var num = 10;
while (num <= 15){
    console.log(num);
    num++;
}
