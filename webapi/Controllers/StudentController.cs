using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Database;
using Microsoft.AspNetCore.Authorization;

namespace webapi.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
           private readonly StudentService _studentService;


        public StudentController(StudentService studentService)
        {
            _studentService = studentService;
        }
        [HttpGet]
        public ActionResult<List<StudentModel>> GetAllStudents()
        {
            return Ok(_studentService.GetAllStudents());
        }

    }
     [HttpDelete]
        [Route("{term}")]
        [Authorize]
        public ActionResult Delete(string term)
        {
            var studentItem = Student.Find(item =>
                   item.Term.Equals(term, StringComparison.InvariantCultureIgnoreCase));

            if (GetAll == null)
            {
                return NotFound();
            }
            else
            {
                Student.Remove(studentItem);
                return NoContent();
            }
        }
}
