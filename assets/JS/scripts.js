function celToFa() {
    var celsiusInput = document.getElementById("celsiusInput").value;
  
    // Validasi input
    if (isNaN(celsiusInput)) {
      alert("Masukkan suhu dalam angka.");
      return;
    }
  
    var celsius = parseFloat(celsiusInput);
    var fahrenheit = (celsius * 9/5) + 32;
    var proses = "(" + celsius + "\u00B0 Celcius * (9 / 5)) + 32 = " + fahrenheit + "\u00B0 Fahrenheit";
  
    document.getElementById("hasil").innerHTML = fahrenheit.toFixed(2) + "&deg;F";
    document.getElementById("explanation").innerHTML = celsius.toFixed(2) + "&deg; C sama dengan " + fahrenheit.toFixed(2) + "&deg;F.";
    document.getElementById("proses").innerText = proses;
    
  }
  
  function reset() {
    document.getElementById("temperatureForm").reset();
    document.getElementById("hasil").innerHTML = "";
    document.getElementById("explanation").innerHTML = "";
  }
  
  function revers() {
    var hasil = document.getElementById("hasil").innerHTML;
  
    if (hasil !== "") {
      var fahrenheit = parseFloat(hasil);
      var celsius = (fahrenheit - 32) * 5/9;
      var proses = "(" + fahrenheit + "\u00B0 Fahrenheit * (9 / 5)) + 32 = " + celsius + "\u00B0 Celcius ";
  
      document.getElementById("hasil").innerHTML = celsius.toFixed(2) + "&deg;C";
      document.getElementById("explanation").innerHTML = fahrenheit.toFixed(2) + "&deg;F sama dengan " + celsius.toFixed(2) + "&deg; C.";
      document.getElementById("proses").innerText = proses;
    }
  }
  