/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/no-cycle
import Inicio from '../views/index.js';
import Registro from '../views/register.js';
import HTTP404 from '../views/404.js';
// eslint-disable-next-line import/no-cycle
import post from '../views/posts.js';
import ResetPassword from '../views/passwordReset.js';
import UserProfile from '../views/userProfile.js';

const content = document.getElementById('container');

// eslint-disable-next-line no-shadow
const routes = (routes) => {
  content.innerHTML = '';

  // console.log(routes);
  switch (routes) {
    case '':
      return content.appendChild(Inicio());
    case '#/home':
      return content.appendChild(Inicio());

    case '#/userRegister':
      return content.appendChild(Registro());

    case '#/resetpassword':
      return content.appendChild(ResetPassword());

    case '#/userPost':
      return content.appendChild(post());

    case '#/userProfile':
      return content.appendChild(UserProfile());

    default:
      return content.appendChild(HTTP404());
  }
};

export { routes };
