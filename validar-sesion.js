
// el prevendefault impide que se envie el form sin antes verificar
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
//    se toman los valores del form de iniciar sesion
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;
// y se verifica si estan vacios
    if (usuario.trim() === "") {
        alert("ingrese su dirección de correo ");
        return;
    }
  
    if (clave.trim() === "" ) {
        alert("ingrese su contraseña.");
        return;
        
    }
    if (clave.length < 8){
        alert("su clave es muy corta!! minimo 8 caracteres");
        return;
    }
  
    this.submit();
 
  });
  