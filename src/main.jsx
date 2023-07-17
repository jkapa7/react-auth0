import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

//LOS METODOS DE IMPORTACION DE VARIABLES DE ENTORNO CAMBIAN OCN VITE, ESTA ES LA FORMA, AMBOS VALORES LOS OBTENGO EN LA PAGINA DE AUTH0
const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;

console.log(domain, clientId);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* CON AUTH- PROVIDER ENVUELVO MI APLICACION*/}
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      //CON ESTA REDIRECCION AL HACER LOGIN AUTH0 REDIRIJE SIEMPRE A LA RUTA DONDE SE ENCONTRABA, SI ESTOY EN /EXPLORE, HAGO LOGIN ME REDIRIGE A DONDE ESTABA, /EXPLORE
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
