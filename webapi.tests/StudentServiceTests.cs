using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Logging;
using NUnit.Framework;
using FakeItEasy;
using FluentAssertions;

public class StudentServiceTests
{
    private StudentService _StudentService; // System Under Test (SUT)
    private const string IsValidEmail = "@oit.edu";

    [SetUp]
    public void Setup()
    {

        _StudentRepository = A.Fake<IStudentRepository>();

        _StudentService = new StudentService(_StudentRepository);
    }

    [Test]
    public void ShouldNotReturnStudentsValidEmail()
    {
        // Arrange (Given)
        A.CallTo(() => _StudentRepository.GetAllStudents()).Returns(
            new List<Student> {
                new Student {
                    studentID = "11111",
                    email_address = "Jason@gmail.com"
                },
                new Student {
                    StudentID = "22222",
                    email_Address = "Ravi@oit.edu"
                }
            }
        );

        // Act (When)
        var StudentViewModels = _StudentService.GetAllStudents();

        // Assert (NUnit Assertions) (Then)
        Assert.That(StudentViewModels.Any(pdto => pdto.ValidEmail), Is.EqualTo(false));

        // Assert (FluentAssertions) (Then)
        StudentViewModels.Any(pdto => pdto.ValidEmail).Should().BeFalse();
    }

    [Test]
    public void ShouldReturnStudentsValidEmail()
    {
        // Arrange
        var expectedStudentName = ValidEmailKey + "test";

        A.CallTo(() => _StudentRepository.GetAllStudents()).Returns(
            new List<Student> {
                new Student {
                    studentID = "11111",
                    email_address = "Jason@gmail.com"
                },
                new Student {
                    StudentID = "22222",
                    email_Address = "Ravi@oit.edu"
                }
            }
        );

        // Act
        var StudentViewModels = _StudentService.GetAllStudents();

        // Assert (FluentAssertions)
        StudentViewModels.Count(pdto => pdto.ValidEmail).Should().Be(1);
        StudentViewModels.Single(pdto => pdto.ValidEmail).Name.Should().Be(expectedStudentName);
    }


}