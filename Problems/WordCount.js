// var speech ="Efn dknd dnf enln flc nfa. Qfd fhb esb fnkf be efbf.";
// console.log(speech.length);
// console.log(speech[5]);

var speech ="Efn dknd dnf enln flc nfa. Qfd fhb esb fnkf be efbf.";

var count = 0;
for(var i=0; i< speech.length; i++){
    var char = speech[i];
    if(char == " " && speech[i-1] != " "){
        count++;
    }
}
count++;
console.log(count);


