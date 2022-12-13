name_of_the_student_array = [];
function submit() 
{
var display_student_array = [];
for (var j=1;j<5;j++)
{

    var name_of_the_student=document.getElementById("name_of_the_student"+j).value;
    console.log(name_of_the_student);
    name_of_the_student.push(name_of_the_student);
   
} console.log(name_of_the_student_array);

var length_of_name_of_student_array=name_of_the_student_array.length;
console.log(length_of_name_of_student_array);

for (var k=0;k<length_of_name_of_student_array;k++)
{

display_student_array.push("name "+name_of_the_student_array[k]);
console.log (display_student_array);
document.getElementById("submit_buttom").style.display="none";
document.getElementById("sort_buttom").style.display="inline-block";

}

}