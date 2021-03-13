using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

[Table("student")]
public class student
{
    [Column("student_id")]
    [Key]
    public long studentId {get; set;}

    [Column("email_address")]
    public string email_address {get; set;}

}