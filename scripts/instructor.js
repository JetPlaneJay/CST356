var instructors = '{"instructors": [{"firstName":"Gerald", "middleInitial":"H", "lastName":"Adler"}, {"firstName":"Michael", "middleInitial":"M", "lastName":"Margarito"}, {"firstName": "Xi", "middleInitial":"V", "lastName":"Chu"}]}'


function instructorArray ()  { 
   return JSON.parse(instructors);
}


function initializeInstructors(){
    var data = instructorArray();

    displayInstructors(data.instructors);
}

function displayInstructors(instructors) {

    var tableRows = "";
    for (i = 0; i < instructors.length; i++) {
        var firstName = instructors[i].firstName;
        var middleInitial = instructors[i].middleInitial;
        var lastName = instructors[i].lastName;
        tableRows += "<tr><td>" + firstName + "</td><td>" + middleInitial + "</td><td>" + lastName + "</td></tr>";
    }   
    document.getElementById("instructorList").innerHTML = tableRows;
}



