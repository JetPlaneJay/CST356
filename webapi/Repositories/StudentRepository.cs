using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Logging;
using Database;
using System;

public class StudentRepository
{
    private readonly SchoolContext _dbContext;


    public StudentRepository(SchoolContext dbContext)
    {
        _dbContext = dbContext;
       
    }

    public List<Student> GetAllStudents()
    {
        try
        {
            return _dbContext.Student.ToList();
        } 
        catch(Exception)
        {
                       
            return new List<Student>();
        }
    }
}