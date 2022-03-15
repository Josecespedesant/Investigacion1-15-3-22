using System.Runtime.CompilerServices;
[assembly: InternalsVisibleTo("InvestigacionUT")]

namespace Investigacion
{
    internal class Calculadora
    {
        internal double Suma(int primer, int segundo)
        {
            var result = primer + segundo;
            return result;
        }

        internal double Resta(int primer, int segundo)
        {
            var result = primer - segundo;
            return result;
        }

        internal double Division(int dividendo, int divisor)
        {
            if (divisor == 0) throw new Exception("Division por 0 está prohibida");
            var result = dividendo / divisor;
            return result;
        }

        internal double Multiplicacion(int multiplicando, int multiplicador)
        {
            var result = multiplicando * multiplicador;
            return result;
        }
    }
}
