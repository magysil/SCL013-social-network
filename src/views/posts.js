import { logOut, statusUser, authRegister } from "../lib/fireBase.js";
import { db } from "../main.js";

export default () => {
  const views = `
  <!-- Menu superior -->
    <nav class="nav-flex">
        <a class="logo" id="home" href="#"><img src="img/logo2-01.png" alt=""></a>
        <ul>
            <input id="search" placeholder="Buscar">
        </ul>
        <ul class="navigation">
            <li>
                <div><img class='imgPerfil' src="img/perfilUsuario.jpg"></div>
            </li>
            <li><a id="btnLogOut" href="#/home">Cerrar Sesion</a></li>

        </ul>
    </nav>

    <!-- Contenido del sitio -->
    <div class="contentPost">
        <div class="perfilUserAndPostsUser">
            <section class="perfilUser">
                <ul id='perfilUserContent'>
                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quisquam repellat quia
                        praesentium perferendis, qui sapiente dignissimos laboriosam provident explicabo laudantium
                        veritatis non, ut accusantium assumenda odio ad, voluptatem quo?</h3>
                </ul>
            </section>

            <section class="postUser">
                <form id="add-post-form">
                    <input type="text" name="title" placeholder="Ingresa Titulo">
                    <input type="text" name="description" placeholder="Ingresa Descripcion">
                    <button>Agregar Post</button>
                </form>
                <div class='contenidoPost'>
                    <ul id='contenidoPost'>

                    </ul>
                </div>
            </section>
        </div>
    </div>
    
    <!-- footer -->
    <div class="footer">
        <p>© min Corp.</p>
    </div>
    </div>
    </div>

    <!-- Fin -->
	`;
  const divElement = document.createElement("div");
  divElement.innerHTML = views;

  const postList = divElement.querySelector("#contenidoPost");

  // Crea TODOS los elementos & muestra en pantalla
  const renderMusic = (doc) => {
    let li = document.createElement("li");
    let title = document.createElement("span");
    let description = document.createElement("span");
    let br = document.createElement("br");
    let deleteX = document.createElement("div");

    li.setAttribute("data-id", doc.id);
    deleteX.setAttribute("class", "cerrar");
    title.textContent = doc.data().titulo;
    description.textContent = doc.data().descripcion;
    deleteX.textContent = "x";

    li.appendChild(deleteX);
    li.appendChild(title);
    li.appendChild(br);
    li.appendChild(description);

    postList.appendChild(li);

    // Borrar publicacion por ID
    deleteX.addEventListener("click", (e) => {
      e.stopPropagation();
      let id = e.target.parentElement.getAttribute("data-id");
      db.collection("publicaciones").doc(id).delete();
    });
  };

  // tiempo Real
  db.collection("publicaciones")
    .orderBy("titulo")
    .onSnapshot((snapshot) => {
      let changes = snapshot.docChanges();
      changes.forEach((change) => {
        console.log(change.type);
        if (change.type == "added") {
          renderMusic(change.doc);
        } else if (change.type == "removed") {
          let li = postList.querySelector("[data-id=" + change.doc.id + "]");
          postList.removeChild(li);
        }
      });
    });

  //Agregar Publicacion
  const form = divElement.querySelector("#add-post-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    db.collection("publicaciones").add({
      titulo: form.title.value,
      descripcion: form.description.value,
    });
    form.title.value = "";
    form.description.value = "";
    alert("Su informacion ha sido guardada");
  });

  //Boton Cerrar Sesion
  const btnLogOut = divElement.querySelector("#btnLogOut");
  btnLogOut.addEventListener("click", () => {
    logOut();
  });

  //Usuario recien conectado
  const accion = () => {
    let user = firebase.auth().currentUser;
    let email;
    if (user != null) {
      email = user.photoURL;
      console.log(email);
    }
  };
  accion();
  
  statusUser();
  console.log(statusUser());
  return divElement;
};
