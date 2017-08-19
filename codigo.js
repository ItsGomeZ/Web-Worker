//JavaScript Document

window.addEventListener("load",comenzar,false);

function comenzar() {
  zonadatos=document.getElementById("zonadatos");
  url=document.getElementById("url");

  url.addEventListener("click",cambia_url,false);

  window.addEventListener("popstate",nuevaurl,false);//popstate:cuando cambie la url
  window.replaceState(1,null);//Estado:1
}

function cambia_url() {
  /*zonadatos.innerHTML="Estas en la pagina 2";
  window.history.pushState(null,null,"pagina2.html");//Args: (estado,titulo,url)*/

  mostrar(2);
  window.history.pushState(2,null,"pagina2.html");
}

function nuevaurl(e) {//e=url
  mostrar(e.state);//state=1 o 2
}

function mostrar(actual) {
  zonadatos.innerHTML="Estas en la pagina: " + actual;
}
