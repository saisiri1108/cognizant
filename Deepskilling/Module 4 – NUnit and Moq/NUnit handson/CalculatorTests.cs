using NUnit.Framework;

namespace NUnitHandson
{
    [TestFixture]
    public class CalculatorTests
    {
        Calculator calculator;

        [SetUp]
        public void Setup()
        {
            calculator = new Calculator();
        }

        [Test]
        public void Add_Test()
        {
            Assert.AreEqual(8, calculator.Add(5, 3));
        }

        [Test]
        public void Subtract_Test()
        {
            Assert.AreEqual(2, calculator.Subtract(5, 3));
        }

        [Test]
        public void Multiply_Test()
        {
            Assert.AreEqual(15, calculator.Multiply(5, 3));
        }

        [Test]
        public void Divide_Test()
        {
            Assert.AreEqual(2, calculator.Divide(6, 3));
        }
    }
}
