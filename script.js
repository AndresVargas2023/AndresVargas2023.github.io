const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const DATO = parseFloat(document.getElementById('peso').value);

    if (DATO > 0) {
        ERROR.style.display = 'none';
        let flujo, mantenimiento;
        
        if (DATO <= 10) {
            flujo = (DATO * 100) / 24;
        } else if (DATO <= 20) {
            flujo = (1000 + (DATO - 10) * 50) / 24;
        } else if (DATO <= 30) {
            flujo = (1500 + (DATO - 20) * 20) / 24;
        } else {
            // Cálculo adicional para peso mayor a 30
            const resultado1 = ((DATO * 4) + 7) / (DATO + 90) * 1500 / 24;
            const resultado2 = ((DATO * 4) + 7) / (DATO + 90) * 2000 / 24;
            
            const mantenimiento1 = resultado1 * 1.5;
            const mantenimiento2 = resultado2 * 1.5;

            // Mostrar los resultados redondeados
            FLU.innerHTML = `Mantenimiento * 1500= ${Math.round(resultado1)} cc/hr<br>m+m/2= ${Math.round(mantenimiento1)} cc/hr`;
            MAN.innerHTML = `Mantenimiento * 2000= ${Math.round(resultado2)} cc/hr<br>m+m/2= ${Math.round(mantenimiento2)} cc/hr`;

            FLU.style.display = 'block';
            MAN.style.display = 'block';

            // Salir de la función ya que hemos mostrado los resultados
            return;
        }

        if (DATO <= 30) {
            mantenimiento = flujo * 1.5;
            FLU.innerHTML = `Mantenimiento= ${Math.round(flujo)} cc/hr`;
            MAN.innerHTML = `m+m/2= ${Math.round(mantenimiento)} cc/hr`;
            FLU.style.display = 'block';
            MAN.style.display = 'block';
        }
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
});
