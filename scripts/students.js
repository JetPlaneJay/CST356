var students = '{"students": [{"studentID":11111, "emailAddress":"Rachel.Mendez77@gmail.com"}, {"studentID":222222, "emailAddress":"Brian.Rose@gmail.com"}, {"studentID": 333333, "emailAddress":"Someone.Else@gmail.com"}]}'


function studentArray ()  { 
   return JSON.parse(students);
}


function initializeStudents(){
    var data = studentArray();

    displayStudents(data.students);
}

function displayStudents(students) {

    var tableRows = "";
    for (i = 0; i < students.length; i++) {
        var studentID = students[i].studentID;
        var emailAddress = students[i].emailAddress;
        tableRows += "<tr><td>" + studentID + "</td><td>" + emailAddress + "</td></tr>";
    }   
    document.getElementById("studentList").innerHTML = tableRows;
}



