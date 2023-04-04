

function parametros (numero, minimo, maximo,inclusivo)
{
    function parametros(numero, minimo, maximo, inclusivo)
     {
        if (numero >= maximo) {
          console.log("Número "+ numero +" está no máximo");
          return true;
        } 
        else if (numero <= minimo) {
          console.log("Número "+ numero +" está no mínimo");
          return true;
        } 
        else {
          return inclusivo;
        }
      }
}
      

      console.log(parametros(100, 10, 1000, true)); // true
      console.log(parametros(5, 10, 1000, true)); // true
      console.log(parametros(500, 10, 1000, true)); // true
      console.log(parametros(10, 10, 1000, true)); // true
      console.log(parametros(1000, 10, 1000, true)); // true