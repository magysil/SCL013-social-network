/* eslint-disable spaced-comment */
/* eslint-disable no-const-assign */
/* eslint-disable no-use-before-define */
/* eslint-disable brace-style */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable new-cap */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/* eslint-disable import/no-cycle */
/* eslint-disable no-alert */
/* eslint-disable no-console */
import { logOut, statusUser } from '../lib/fireBase.js';
// eslint-disable-next-line import/no-cycle
import { db } from '../main.js';
import { validateTxtPostArea } from '../lib/validate.js';

export default () => {
  const views = /*html*/ `
  <!-- Menu superior -->
    <nav class='nav-flex'>
        <a class='logo' id='home' href='#'><img src='img/logo2-01.png' alt=''></a>
        <ul>
            <input id='search' placeholder='Buscar'>
        </ul>
        <ul class='navigation'>
            <li>
                <div class='divImgPerfilUser'>
                <img class='imgPerfilUser'>
                </div>
            </li>
            <li><a id='btnLogOut' href='#/home'>Cerrar Sesion</a></li>

        </ul>
    </nav>
    <!-- Contenido del sitio -->
    <div class='contentPostUser'>
        <div class='perfilUserAndPostsUser'>
            <section class='perfilUser'>
            </section>

            <section class='postUser'>
                <!-- contenedor para los posts -->
                <section class='mainContentPost'>
                    <!-- caja que contiene los elementos de la izquierda -->
                    <section class='leftContent'>
                        <div class='divImgPerfilPostUser'>
                        <img class='imgPerfilPostUser'>
                        </div>
                    </section>
                    <!-- caja que contiene los elementos de la derecha -->
                    <section class='rightContent'>
                        <!-- contiene el texto y boton de publicar -->
                        <form class='publishPost'>
                            <section class='upContent'>
                                <textarea id='txtArea' name='txtArea' maxlength='300' 
                                data-resizable='true' placeholder='¿Qué estás pensando?'></textarea>
                            </section>
                            <section class='downContent'>
                                <div class='iconContent'>
                                    <span>UpLoad</span>
                                </div>
                                <div>
                                    <button id='btnSendContent' name='btnSend' class='btnSendContent'>Publicar</button>
                                </div>
                            </section>
                        </form>
                    </section>
                    <div>
                    <button style="visibility:hidden" id='btnEditContent' name='btnEdit' class='btnEditContent'>Editar</button>
                    </div>
                </section>
                <div class='contentPost'>
                    <ul id='contentPost'>
                    
                    </ul>
                </div>
            </section>
        </div>
    </div>

    <!-- footer -->
    <div class='footer'>
        <p>© min Corp.</p>
    </div>
    </div>
    </div>

    <!-- Fin -->`;

  const body = document.body;
  body.setAttribute('class', 'bodyPost');

  const divElement = document.createElement('div');
  divElement.innerHTML = views;

  const postList = divElement.querySelector('#contentPost');

  // Crea TODOS los elementos & muestra en pantalla
  const renderMusic = (doc) => {
    const li = document.createElement('li');
    const description = document.createElement('span');
    const deleteX = document.createElement('div');
    const edit = document.createElement('button');


    li.setAttribute('data-id', doc.id);
    li.setAttribute('class', 'postContentLi');
    deleteX.setAttribute('class', 'cerrar');
    description.textContent = doc.data().descripcion;
    description.setAttribute('id', 'description');
    deleteX.textContent = 'x';
    edit.setAttribute('id', 'btnEdit');
    edit.setAttribute('class', 'btnEdit');
    edit.textContent = 'Editar';

    li.appendChild(description);
    li.appendChild(deleteX);
    li.appendChild(edit);
    postList.appendChild(li);

    // Borrar publicacion por ID
    deleteX.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = e.target.parentElement.getAttribute('data-id');
      db.collection('publicaciones').doc(id).delete();
      alert('Documento Eliminado');
    });

    // boton para iniciar evento Editar Documento
    edit.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = doc.id;
      const descrip = doc.data().descripcion;
      document.getElementById('txtArea').value = descrip;
      const botonEdit = document.querySelector('#btnEditContent');
      botonEdit.addEventListener('click', () => {
        const descrip = document.getElementById('txtArea').value;
        activa();
        const ref = db.collection('publicaciones').doc(id);
        return ref.update({
          descripcion: descrip,
        })
          .then(() => {
            document.querySelector('#txtArea').value = '';
            alert('Documento Actualizado');
          });
      });
      desactiva();
    });
    // Desactiva y Activa Boton Publicar
    const desactiva = () => {
      const btnSend = document.querySelector('#btnSendContent');
      btnSend.disabled = true;
      const btnEdit = document.querySelector('#btnEditContent');
      btnEdit.setAttribute('style', 'visibility:visible');
    };
  };
  const activa = () => {
    const btnSend = document.querySelector('#btnSendContent');
    btnSend.disabled = false;
  };

  // Cambios en tiempo Real
  db.collection('publicaciones')
    .onSnapshot((snapshot) => {
      const changes = snapshot.docChanges();
      changes.forEach((change) => {
        console.log(change.type);
        if (change.type === 'added') {
          renderMusic(change.doc);
        }
        else if (change.type === 'modified') {
          const li = postList.querySelector(`[data-id=${change.doc.id}]`);
          postList.removeChild(li);
          renderMusic(change.doc);
        }
        else if (change.type === 'removed') {
          const li = postList.querySelector(`[data-id=${change.doc.id}]`);
          postList.removeChild(li);
        }
      });
    });

  // Agregar Publicacion
  const form = divElement.querySelector('.publishPost');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const txtAreaInput = divElement.querySelector('#txtArea').value;
    const valid = validateTxtPostArea(txtAreaInput);
    if (valid === false) {
      alert('Debe escribir antes de Publicar');
    } else {
      db.collection('publicaciones').add({
        fecha: firebase.firestore.FieldValue.serverTimestamp(),
        descripcion: txtAreaInput,
      });
      divElement.querySelector('#txtArea').value = '';
    }
  });

  // Boton Cerrar Sesion
  const btnLogOut = divElement.querySelector('#btnLogOut');
  btnLogOut.addEventListener('click', () => {
    logOut();
  });

  // funcion control del textarea del post
  const txtArea = divElement.querySelector('#txtArea');
  txtArea.addEventListener('keyup', () => {
    txtArea.style.height = 'auto';
    txtArea.style.height = `${txtArea.scrollHeight}px`;
  });

  // Usuario recien conectado
  /* const accion = () => {
    const user = firebase.auth().currentUser;
    let email;
    if (user != null) {
      email = user.photoURL;
      console.log(email);
    }
  }; */
  /* accion();
  statusUser();
  console.log(statusUser()); */
  statusUser();
  return divElement;
};
