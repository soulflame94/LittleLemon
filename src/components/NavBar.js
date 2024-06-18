import React, { useState } from 'react';
import logo from '../images/logo.jpg';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="Nav_Bar">
      <style>
        {`
          /* Global Styles */
          body {
            font-family: 'Karla', sans-serif;
          }
          
          h1, h2 {
            font-family: 'Markazi Text', serif;
            font-size: 4em;
          }
          
          h3 {
            font-family: 'Markazi Text', serif;
            font-size: 2em;
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
          
          /* Estilos para dispositivos móviles */
          @media (max-width: 768px) {
            .Nav_Bar {
              position: relative; /* Asegura que los elementos hijos respeten el posicionamiento relativo */
              background-color: #f0f0f0; /* Fondo gris para dispositivos móviles */
              padding-bottom: 10px; /* Ajusta el padding para el rectángulo gris */
            }

            .Nav_Bar .logo {
              order: 1; /* Cambia el orden para colocar el logo primero */
              margin-right: 10px; /* Espacio entre el logo y el botón */
            }

            .Nav_Bar .menu_button {
              order: 2; /* Cambia el orden para colocar el botón después del logo */
              cursor: pointer;
              background: none;
              border: none;
              padding: 10px;
              margin-left: 10px; /* Espacio entre el logo y el botón */
              z-index: 1100; /* Asegura que el botón esté sobre el menú */
            }

            .Nav_Bar .menu_panel {
              display: ${menuOpen ? 'block' : 'none'};
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
            }
          }

          /* Estilos específicos para el botón de hamburguesa en móviles */
          @media (min-width: 769px) {
            .Nav_Bar .menu_button {
              display: none; /* Ocultar el botón en versiones de escritorio */
            }
          }
        `}
      </style>

      <div className="logo">
        <img src={logo} alt="Little Lemon Logo" />
      </div>

      {/* Botón de hamburguesa visible solo en dispositivos móviles */}
      <button className="menu_button" onClick={toggleMenu}>
        ☰
      </button>

      {/* Panel de menú desplegable para dispositivos móviles */}
      <div className="menu_panel">
        <div className="links">
          {/* Enlaces visibles solo en dispositivos móviles */}
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#menu" onClick={closeMenu}>Menu</a>
          <a href="#reservations" onClick={closeMenu}>Reservations</a>
          <a href="#order" onClick={closeMenu}>Order Menu</a>
          <a href="#login" onClick={closeMenu}>Login</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
