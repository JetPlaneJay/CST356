
using System.Collections.Generic;

public class StudentService

{

 public List<StudentModel> GetAllStudents()
    {
        var studentViewModels = new List<StudentModel>();

        foreach(var Student in _studentRespository.GetAllStudents())
        {
            studentViewModels.Add(new StudentModel {
                StudentId = Student.studentId,
                email_address = Student.email_address,
                emailKey = BusinessRules.isValidEmail(Student)

            });
        }
    }
}

