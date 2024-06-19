import React from 'react';
import mario from '../images/mario.jpg';
import mario2 from '../images/mario2.jpg';

const About = () => {
  return (
    <div className="About">
      <style>
        {`
          .About {
            display: flex;
            align-items: center;
            text-align: left;
            padding: 0 15%;
            height: 510px;
          }

          .about-text {
            max-width: 600px;
            margin-bottom: 20px;
          }

          .about-text h2 {
            color: #47674A;
          }

          .about-text .description {
            font-size: 1.25em;
            color: #333;
            margin: 10px 0;
          }

          .about-images {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
            position: relative;
            text-align: right;
          }

          .about-images .image1,
          .about-images .image2 {
            border-radius: 10px;
            max-width: 280px;
            width: 100%;
          }

          .about-images .image1 {
            grid-row: 1 / 2;
            grid-column: 1 / 2;
            transform: translateY(50%) translateX(250px);
          }

          .about-images .image2 {
            grid-row: 2 / 3;
            grid-column: 1 / 2;
            transform: translateY(-30%) translateX(25px);
          }

          /* Media query para dispositivos móviles */
          @media (max-width: 768px) {
            .About {
              flex-direction: column;
              padding: 20px;
              height: auto;
              text-align: center;
            }

            .about-images {
              margin-top: 20px;
            }

            .about-text h2 {
              font-size: 2em;
            }

            .about-text .description {
              font-size: 0.95em;
            }

            .about-images .image1,
            .about-images .image2 {
              max-width: 60%;
              margin-top: 10px;
              transform: none;
              margin-left: auto;
              margin-right: auto;
            }

            /* Ocultar la segunda imagen en dispositivos móviles */
            .about-images .image2 {
              display: none;
            }
          }
        `}
      </style>

      <div className="about-text">
        <h2>Little Lemon</h2>
        <h4>Chicago</h4>
        <p className="description">Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
      </div>
      <div className="about-images">
        <img className="image1" src={mario2} alt="Adrian" />
        <img className="image2" src={mario} alt="Mario" />
      </div>
    </div>
  );
};

export default About;
