import Inicio from "../views/index.js";
import Registro from "../views/register.js";
import HTTP404 from "../views/404.js";
import ResetPassword from "../views/passwordReset.js";

let content = document.getElementById("container");

const routes = (routes) => {
  content.innerHTML = "";
  // console.log(routes);
  switch (routes) {
    case "":
      return content.appendChild(Inicio());
    case "#/home":
      return content.appendChild(Inicio());

    case "#/userRegister":
      return content.appendChild(Registro());

    case "#/resetpassword":
      return content.appendChild(ResetPassword());

    default:
      return content.appendChild(HTTP404());
  }
};

export { routes };
 