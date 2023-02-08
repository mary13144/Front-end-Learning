/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
 var countStudents = function(students, sandwiches) {
    while(students.length){
        if(students[0]==sandwiches[0]){
            students.shift();
            sandwiches.shift();
        }else{
            if (!students.includes(sandwiches[0])){
                break;
            }
            students.push(students.shift());
        }

    }
    return students.length;
};