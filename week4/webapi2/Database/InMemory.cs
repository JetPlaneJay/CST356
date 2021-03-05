using System.Collections.Generic;

namespace Database
{
    public static class InMemory
    {
        public static List<Student> Students = new List<Student> {
            new Student {
                Id = 1,
                StudentID = 11111,
                FirstName = "Rachel",
                LastName = "Mendez"
            },
            new Student {
                Id = 2,
                StudentID = 22222,
                FirstName = "Brian",
                LastName = "Rose"
            }
        };
        public static List<Instructor> Instructors = new List<Instructor> {
            new Instructor {
                Id = 1,
                MiddleInitial = "H",
                FirstName = "Gerald",
                LastName = "Adler"
            },
            new Instructor {
                Id = 2,
                MiddleInitial = "M",
                FirstName = "Michael",
                LastName = "Magarito"
            },
            new Instructor {
                Id = 3,
                MiddleInitial = "V",
                FirstName = "Xi",
                LastName = "Chu"
            }
        };
    }
}