using Microsoft.VisualStudio.TestTools.UnitTesting;
using Investigacion;
using System;

namespace InvestigacionUT
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestSuma()
        {
            Calculadora calculadora = new Calculadora();
            var resultado = calculadora.Suma(3, 7);
            Assert.AreEqual(10.0, resultado);
        }

        [TestMethod]
        public void TestResta()
        {
            Calculadora calculadora = new Calculadora();
            var resultado = calculadora.Resta(10, 10);
            Assert.AreEqual(0.0, resultado);
        }

        [TestMethod]
        public void TestMultiplicacion()
        {
            Calculadora calculadora = new Calculadora();
            var resultado = calculadora.Multiplicacion(3, 10);
            Assert.AreEqual(30.0, resultado);
        }

        [TestMethod]
        public void TestDivision()
        {
            Calculadora calculadora = new Calculadora();
            var resultado = calculadora.Division(10, 2);
            Assert.AreEqual(5.0, resultado);
        }

        [TestMethod]
        [ExpectedException(typeof(Exception))]
        public void TestDivisionByZero()
        {
            Calculadora calculadora = new Calculadora();
            calculadora.Division(10, 0);
        }

    }
}