using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Database;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InstructorController : ControllerBase
    {
        private readonly ILogger<InstructorController> _logger;

        public InstructorController(ILogger<InstructorController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(getInstructors());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            if (id == 0)
            {
                return BadRequest();
            }
            
            var Instructor = InMemory.Instructors.FirstOrDefault(s => s.Id == id);

            if (Instructor == null)
            {
                return NotFound();
            }

            return Ok(Instructor);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Instructor Instructor)
        {
            Instructor.Id = getNextId();

            InMemory.Instructors.Add(Instructor);

            return CreatedAtAction(nameof(GetById), new { id = Instructor.Id }, Instructor);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateInstructor(int id, [FromBody] Instructor Instructor)
        {
            var existingInstructor = InMemory.Instructors.FirstOrDefault(s => s.Id == id);

            if (existingInstructor == null)
            {
                return NotFound();
            }

            existingInstructor.FirstName = Instructor.FirstName;
            existingInstructor.LastName = Instructor.LastName;
            existingInstructor.MiddleInitial = Instructor.MiddleInitial;

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteInstructor(int id)
        {
            var existingInstructor = InMemory.Instructors.FirstOrDefault(s => s.Id == id);

            if (existingInstructor == null)
            {
                return NotFound();
            }

            InMemory.Instructors.Remove(existingInstructor);

            return NoContent();
        }

        private List<Instructor> getInstructors()
        {
            return InMemory.Instructors;
        }  

        private int getNextId()
        {
            return InMemory.Instructors.Max(p => p.Id) + 1;
        }
    }
}