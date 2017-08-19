//JavaScript Document

window.addEventListener("load",comenzar,false);

function comenzar() {
  zonadatos=document.getElementById("zonadatos");
  url=document.getElementById("url");

  url.addEventListener("click",cambia_url,false);
}

function cambia_url() {
  zonadatos.innerHTML="Estas en la pagina 2";
  window.history.pushState(null,null,"pagina2.html");//Args: (estado,titulo,url)
}
