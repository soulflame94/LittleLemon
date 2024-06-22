import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.jpg';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import "../components/styles/Header.css"; // Asegúrate de que la ruta al archivo CSS sea correcta

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <header className="header-container">
        <style>
          {`
            /* Global Styles */
            * {
              padding: 0;
              margin: 0;
              box-sizing: border-box;
              padding: 0px 5%;
            }

            body {
              font-family: 'Karla', sans-serif;
              font-size: 16pt;
              color: #333333;
            }

            input {
              font-family: "Karla", sans-serif;
              font-size: 15px;
              color: #333;
            }

            ::placeholder {
              color: #949494;
              opacity: 1; /* Firefox */
            }

            :-ms-input-placeholder { /* Internet Explorer 10-11 */
              color: #333333;
            }

            ::-ms-input-placeholder { /* Microsoft Edge */
              color: #333333;
            }

            h1, h2 {
              font-family: 'Markazi Text', serif;
            }

            h1 {
              font-size: 64pt;
            }

            h2 {
              font-size: 40pt;
            }

            h3 {
              font-size: 18pt;
            }

            ul {
              list-style-type: none;
            }

            a {
              text-decoration: none;
              color: #333333;
              animation: slideIn 0.5s ease-out;
            }

            /* Nav Bar */
            .Nav_Bar {
              display: flex;
              justify-content: space-between;
              align-items: center;
              background-color: #fff;
              padding: 10px 20px;
              border-bottom: 1px solid #ddd;
              height: 147px;
              padding: 0 15%;
            }

            .Nav_Bar .logo img {
              height: 50px;
            }

            /* Animation */
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translateY(-20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .Nav_Bar .links a {
              animation: slideIn 0.5s ease-out;
            }

            /* Estilos para dispositivos móviles */
            @media (max-width: 768px) {
              .Nav_Bar {
                position: relative; /* Asegura que los elementos hijos respeten el posicionamiento relativo */
                background-color: #f0f0f0; /* Fondo gris para dispositivos móviles */
                padding-bottom: 10px; /* Ajusta el padding para el rectángulo gris */
                height: auto; /* Ajustar la altura para dispositivos móviles */
                padding: 5px 10px; /* Reducir el padding en dispositivos móviles */
              }

              .Nav_Bar .logo img {
                height: 40px; /* Reducir el tamaño del logo en dispositivos móviles */
              }

              .Nav_Bar .menu_button {
                order: 2; /* Cambia el orden para colocar el botón después del logo */
                cursor: pointer;
                background: none;
                border: none;
                margin-left: 10px; /* Espacio entre el logo y el botón */
                font-size: 1.5em; /* Ajustar el tamaño del botón */
              }

              .Nav_Bar .menu_panel {
                display: ${click ? 'block' : 'none'};
                position: absolute;
                top: calc(100% + 10px); /* Coloca el panel justo debajo del botón */
                right: 20px; /* Ajusta la posición del panel */
                width: calc(100% - 40px); /* Ajusta el ancho del panel */
                max-width: 300px; /* Ancho máximo del panel */
                background-color: #fff;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                padding: 10px;
                z-index: 1000;
              }

              .Nav_Bar .links {
                display: flex;
                flex-direction: column;
              }

              .Nav_Bar .links a {
                margin: 10px 0;
                text-decoration: none;
                color: #000;
                display: block;
                padding: 5px 0;
                font-size: 0.875em; /* Reducir el tamaño de la fuente en dispositivos móviles */
              }
            }

            /* Estilos específicos para el botón de hamburguesa en móviles */
            @media (min-width: 769px) {
              .Nav_Bar .menu_button {
                display: none; /* Ocultar el botón en versiones de escritorio */
              }

              .Nav_Bar .links {
                display: flex;
                flex-direction: row;
                gap: 20px;
              }

              .Nav_Bar .links a {
                margin: 0;
                text-decoration: none;
                color: #000;
                display: block;
                padding: 5px 10px;
                font-size: 1em;
              }
            }
          `}
        </style>
        <NavLink to="/">
          {<img className="logo-img" src={logo} alt="Little Lemon logo" />}
        </NavLink>
        <nav>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="#">About</NavLink></li>
            <li><NavLink to="#">Menu</NavLink></li>
            <li><NavLink to="/reservations">Reservations</NavLink></li>
            <li><NavLink to="#">Order Online</NavLink></li>
            <li><NavLink to="#">Login</NavLink></li>
          </ul>
        </nav>
        <div className="hamburger" onClick={handleClick}>
          {click ? (<AiOutlineClose size={20} style={{ color: "#333333" }} />) : (<AiOutlineMenu size={30} style={{ color: "#333333", borderLeft: "1px solid #333333", paddingLeft: "10px", height: "20px" }} />)}
        </div>
      </header>
    </>
  );
}

export default Header;
