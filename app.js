
// made  in jonathan, si algo sale mal culpen al gato 
// js para insertar el footer , la etiqueta footer debe tener el mismo id 
document.getElementById("#idfoot").innerHTML =`
<section class="container-foot">
<div class="caja-logo">
  <div class="item-logo">
    <img src="img/codopress.svg" alt=""> 
  </div>
    
</div>
<div class="caja-general">
  <div class="item-titulo-g">General</div>
  <div class="item-list1"><a href="">Redaccion</a></div>
  <div class="item-list2"><a href="">Terminos y condiciones</a></div>
  <div class="item-list3"><a href="">Publicidad / Advertising</a></div>
  <div class="item-list4"><a href="contacto.html">Contacto</a></div>
  <div class="item-list5"><a href="">Politica de cookies</a></div>
</div>
<div class="caja-social">
  <div class="item-titulo-s">Social</div>
  <div class="item-social">
   <a href=""><img src="img/Vector-twitter.svg" alt=""></a>
   <a href=""><img src="img/Vector-facebook.svg" alt=""></a>
   <a href=""><img src="img/Vector-instagram.svg" alt=""></a>
   <a href=""><img src="img/Vector-youtube.svg" alt=""></a>
   <a href=""><img src="img/Vector-señal.svg" alt=""></a>
  </div>
  
</div>

</section>
<section class="caja-copy">
<div class="copyright">
  <p>&copy;2023 codopress. All rights reserved</p>
</div>
</section>

`
// js para insertar el header , la etiqueta header debe tener el mismo id 
document.getElementById("#idheader").innerHTML =`
<nav>
            <div>
                <img class="logo" src="./img/Codopress.svg" alt="Codopress Gaming">
                <a href="index.html">INICIO</a>
                <a href="juegos.html">JUEGOS</a>
                <a href="noticias.html">NOTICIAS</a>
                <a href="contacto.html">CONTACTO</a>
            </div>

            <div>
                <div class="box">
                    <input type="checkbox" id="check">
                    <div class="searchbox">
                        <input type="text" placeholder="Buscar...">
                        <label for="check" class="icon">
                            <span class="material-symbols-outlined">search</span>
                        </label>
                    </div>
                </div>
                
                <button class="Button1"><a href="iniciar sesion.html">INICIAR SESION</a></button>
            </div>
        </nav>
`
// caja de comentarios  
document.getElementById("#box-op").innerHTML=`
                            <div class="col-fichaOP-2-title">Escribe tu opinión sobre el juego:</div>
                            <br>
                            <textarea name="comentarios" ></textarea>
                            <br>
                            <input type="submit" value="Publicar">
`

// el iframe esta en re4-remake
let vid1 = document.getElementById("vid-1");
let vid2 = document.getElementById("vid-2");
let vid3 = document.getElementById("vid-3");
let iframeSRC = document.getElementById("ifr");
// se declaran 4 let y se obtienen el id 
// se activa con un click , si se hace click en las partes donde tiene el id 
// entonces se cambia el src del id=ifr , que es el iframe que hace de reproductor principal
vid1.onclick = function(){
  iframeSRC.src = "https://www.youtube.com/embed/j5Xv2lM9wes";
   
}
vid2.onclick = function(){
  iframeSRC.src = "https://www.youtube.com/embed/E69tKrfEQag";
  
}
vid3.onclick = function(){
  iframeSRC.src = "https://www.youtube.com/embed/C_IdgsdHwAo?start=20";
 
}
  // api del randomuser y su  js para mostrarlos img y nombres aleatorios
//  la api se aplica a re4-remake
fetch('https://randomuser.me/api/?results=1')// solo es un usuario falso
    .then(response => response.json())
    .then(data => {
       crearUsuario(data.results)
})

function crearUsuario(usuarios){
  let users = document.getElementById("#user")
  usuarios.forEach(usuario => {
     users.innerHTML += ` 
     <span><img src="${usuario.picture.large}" alt=""></span>
  <span>
      <p>${usuario.name.first}</p>
      <br>
  <p>
      Soy de aquellos que veían difícil un remake que superara la versión clásica de Resident Evil 4, pues más allá del factor nostalgia fuertemente presente en mi, el juego clásico objetivamente estuvo muy bien elaborado y envejeció muy bien. Sin embargo, Capcom supo hacer su trabajo y lo logró, este remake superó con creces su versión original y no pude haber quedado más satisfecho.</p>
      <p>06/03/2023</p></span>`
  });
  


}
// no se que problema pudo ser pero las validaciones las tuve que poner en distintos archivos




