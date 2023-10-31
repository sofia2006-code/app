document.addEventListener("DOMContentLoaded", function() {
    const NombreTarea = document.getElementById("NombreTarea");
    const SelectClases = document.getElementById("SelectClases");
    const claseA = document.getElementById("ClaseA");
    const claseB = document.getElementById("ClaseB");
    const claseC = document.getElementById("ClaseC");
  
  
    function updateClases(){
      console.log("asaf");
      if(SelectClases.value === "A"){
        claseA.innerHTML = NombreTarea.value;
      }
  
    }
  
    NombreTarea.addEventListener("change", updateClases);
    SelectClases.addEventListener("change", updateClases);
  
    });
  