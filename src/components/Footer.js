import React from 'react';
import logo2 from '../images/Logo2.png';

const Footer = () => {
  return (
    <div className="Footer_Navigation">
      <style>
        {`
          /* Footer Navigation */
          .Footer_Navigation {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: flex-start;
            background-color: #47674A;
            color: #fff;
            padding: 0 15%;
            height: 476px;
          }

          .Footer_Navigation .footer-section {
            margin-top: 5%;
            flex: 1 1 200px; /* Adjust the basis as needed */
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .Footer_Navigation .footer-section h3 {
            margin-bottom: 10px;
          }

          .Footer_Navigation .footer-section a {
            display: block;
            color: #fff;
            text-decoration: none;
            margin-bottom: 5px;
          }

          .Footer_Navigation .footer-section a:hover {
            text-decoration: underline;
          }

          .Footer_Navigation .logo {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .Footer_Navigation .logo img {
            margin-top: 5%;
            height: 15em;
          }

          /* Mobile Styles */
          @media (max-width: 768px) {
            .Footer_Navigation {
              flex-direction: row; /* Alinear en fila */
              flex-wrap: nowrap;
              justify-content: space-between;
              align-items: center;
              height: auto; /* Ajustar altura para móvil */
              margin-left: auto;
              margin-right: auto;
            }

            .Footer_Navigation .logo {
              display: none;
              height: 0px;
            }

            .Footer_Navigation .footer-section {
              flex: 1; /* Distribuir espacio equitativamente */
              padding-right: 1em;
              margin-top: 0;
            }

            .Footer_Navigation .footer-section h3 {
              font-size: 1em;
            }

            .Footer_Navigation .footer-section a {
              font-size: 0.75em;
            }
          }
        `}
      </style>
      <div className="footer-section">
        <div className="logo"><img src={logo2} alt="Little Lemon Logo" /></div>
      </div>
      <div className="footer-section">
        <h3>Doormat Navigation</h3>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#reservations">Reservations</a>
        <a href="#order">Order Online</a>
        <a href="#login">Login</a>
      </div>
      <div className="footer-section">
        <h3>Contact</h3>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#reservations">Reservations</a>
        <a href="#order">Order Online</a>
        <a href="#login">Login</a>
      </div>
      <div className="footer-section">
        <h3>Social Media Links</h3>
        <a href="#facebook">Facebook</a>
        <a href="#instagram">Instagram</a>
        <a href="#whatsapp">Whatsapp</a>
      </div>
    </div>
  );
};

export default Footer;
