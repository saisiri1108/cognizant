using Moq;
using NUnit.Framework;

namespace MoqHandson
{
    [TestFixture]
    public class StudentServiceTests
    {
        [Test]
        public void GetName_Test()
        {
            var mockRepository = new Mock<IStudentRepository>();

            mockRepository
                .Setup(x => x.GetStudentName(1))
                .Returns("Rahul");

            StudentService service = new StudentService(mockRepository.Object);

            string result = service.GetName(1);

            Assert.AreEqual("Rahul", result);

            mockRepository.Verify(x => x.GetStudentName(1), Times.Once);
        }
    }
}
