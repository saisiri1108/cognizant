namespace MoqHandson
{
    public class StudentService
    {
        private readonly IStudentRepository repository;

        public StudentService(IStudentRepository repository)
        {
            this.repository = repository;
        }

        public string GetName(int id)
        {
            return repository.GetStudentName(id);
        }
    }
}
