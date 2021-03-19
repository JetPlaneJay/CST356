public static class BusinessRules
{
    public static bool isValidEmail(Student student) =>
        student.email_address.ToLower().EndsWith(emailKey);

        public static string emailKey = "oit.edu";

}