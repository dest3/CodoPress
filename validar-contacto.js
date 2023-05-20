// el prevendefault impide que se envie el form sin antes verificar
document.getElementById("formulario1").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
//    se toman los datos del form 
    var nombre1 = document.getElementById("nombre1").value;
    var email1 = document.getElementById("email1").value;
    var asunto1 = document.getElementById("asunto1").value;
   
// y aca se verifica si estan vacios
    if (nombre1.trim() === "") {
        alert("ingrese su nombre");
        return;
    }
  
    if (email1.trim() === "" ) {
        alert("ingrese su mail");
        return;
        
    }
    if (asunto1.trim() === ""){
        alert("ingrese su asunto");
        return;
    }
    if (asunto1.length > 30){
      alert("demasiados caracteres!! max 30");
    return;  
    }
    

    this.submit();
 
  });
