import Inicio from '../views/index.js';
import Registro from '../views/register.js';
import HTTP404 from '../views/404.js';

const content = document.getElementById('container');

const routes = (route) => {
  content.innerHTML = '';
  console.log(route);
  switch (routes) {
    case '':
      return content.appendChild(Inicio());
    case '#/home':
      return content.appendChild(Inicio());

    case '#/userRegister':
      return content.appendChild(Registro());

    default:
      return content.appendChild(HTTP404());
  }
};

export { routes };
