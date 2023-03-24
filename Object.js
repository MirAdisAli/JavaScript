var student ={ id: 123, phone: 32794, name: "Obhi"};
var student2 ={ id: 142, phone: 414125, name: "Mahi"};

console.log(student);
console.log(student2);


var student ={ id: 123, phone: 32794, name: "Obhi"};
var student2 ={ id: 142, phone: 414125, name: "Mahi"};
var phoneProName = "phone";
var phoneNo1 = student.phone;
var phoneNo2 = student["phone"];
var phoneNo3 = student[phoneProName];
//update phone
student2.phone= 389392;
student2["phone"]= 3280101;
student2[phoneProName]= 20800343;

student2.cinema = "ffkjk39";
student2["cinema"]="fabfw eqfwbhjf";

console.log(phoneNo1);
console.log(student2);



