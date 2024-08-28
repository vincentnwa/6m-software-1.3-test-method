/*
    Task
    - In the function, iterate through the array `studentList`.
    - Print each student's name inside the loop using console.log().
*/

const studentList = ["Johnson", "Christina", "Michael", "Lina", "Larry", "Michelle", "Bob", "Wilson"]

function printStudentNames(){
    // Add code here

    const studentListLenght = studentList.length;

    for (i = 0; i < studentListLenght; i++) {
        console.log("The student name is " + studentList[i]);
    }

    return studentList;

    console.log(studentListLenght);

}

printStudentNames();

// Ignore the code below this line
module.exports = {
    studentList,
    printStudentNames
}