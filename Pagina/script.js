function fn1() {
    var Probabilidad = document.getElementById("probabilidad").value;
    var Saltos = document.getElementById("saltos").value;
    Probabilidad = Probabilidad * 10;
    var PasosAyuda = Saltos;
    var v = 0;

    let Poblacion = [0, 0, 0, 0, "Enfermo"]
    for (let i = 0; i < 4; i++) {
        var num = Math.floor((Math.random() * (2 - 0)) + 0);
        Poblacion[i] = num;
        if (Poblacion[i] == 1) {
            Poblacion[i] = "Sano";
        }
        if (Poblacion[i] == 0) {
            Poblacion[i] = "Enfermo";
        }
    }
    alert("La poblacion inicial es: " + Poblacion)
    while (v < Saltos) {
        var y = Math.floor((Math.random() * (5 - 0)) + 0);
        var z = Math.floor((Math.random() * (5 - 0)) + 0);
        if (y != z) {
            if (Poblacion[y] != Poblacion[z]) {
                alert(" INTERACCION " + v + ": puede haber contagio entre persona " + y + " y " + z);
                var p = Math.floor((Math.random() * (11 - 0)) + 0);
                if (p <= Probabilidad) {
                    alert("se contagio");
                    if (Poblacion[y] == "Sano") {
                        Poblacion[y] = "Enfermo";
                    }
                    if (Poblacion[z] == "Sano") {
                        Poblacion[z] = "Enfermo";
                    }

                }
                if (p > Probabilidad) {
                    alert("No se contagio");
                }
            }
            if (Poblacion[y] == Poblacion[z]) {
                alert("INTERACCION " + v + ": No hay contagio ya que ambas son sanas o enfermas.");
            }
        }
        if (y == z) {
            alert("se selecciono la misma persona no hay contagio.");
        }
        v = v + 1;
    }
    alert("La poblacion final es: " + Poblacion);
}