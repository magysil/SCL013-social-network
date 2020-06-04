import Inicio from '../views/index.js';
import Registro from '../views/register.js';
import HTTP404 from '../views/404.js';

const content = document.getElementById('container');

const routes = (routes) => {
  content.innerHTML = '';
  console.log(routes);
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
