function celToFa() {
    var tempcelcius = document.getElementById("celcius").value;
    var tempfahrenheit = (tempcelcius * (9 / 5)) + 32;
    var proses = "(" + tempcelcius +"\u00B0 Celcius * (9 / 5)) + 32= " + tempfahrenheit + "\u00B0 Fahrenheit"
    document.getElementById("proses").innerText = proses;
    document.getElementById("fahrenheit").value = tempfahrenheit;
}
function reset() {
    document.getElementById("celcius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("proses").innerText = "";
}
function reverse() {
    var tempcelcius = document.getElementById("celcius").value;
    var tempfahrenheit = (tempcelcius  - 32 ) * (5 / 9);
    var proses = "(" + tempcelcius +"\u00B0 Fahrenhei - 32) * (5 / 9))= " + tempfahrenheit + "\u00B0 Celcius"
    document.getElementById("proses").innerText = proses;
    document.getElementById("fahrenheit").value = tempfahrenheit;
}