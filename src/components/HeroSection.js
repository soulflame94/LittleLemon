import React from 'react';
import heroimage from '../images/hero-image.jpg';

const HeroSection = () => {
  return (
    <div className="Hero_Section" style={{ backgroundColor: '#47674A', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '392px', padding: '0 15%' }}>
      <style>
        {`
          /* Hero Section */
          .Hero_Section .hero-text {
            max-width: 50%;
          }

          .Hero_Section h1 {
            color: #F4CE14;
            text-align: left;
            margin: 0;
            padding-bottom: 0.5%;
          }

          .Hero_Section h6 {
            color: #fff;
            text-align: left;
            margin: 0;
            font-weight: normal;
          }

          .Hero_Section p {
            margin: 20px 0;
            text-align: left;
            padding-bottom: 1%;
          }

          .button-hero {
            background-color: #000;
            color: #fff;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            min-width: 20em;
            border-radius: 8px;
          }

          .Hero_Section .hero-image img {
            width: 100%;
            max-width: 500px;
            border-radius: 10px;
          }

          .button2 {
            background-color: #000;
            color: #fff;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            min-width: 20em;
            border-radius: 8px;
          }

          .Hero_Section .hero-image {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .Hero_Section .hero-image img {
            width: 80%;
            max-width: 500px;
            margin-bottom: -6em;
          }

          /* Mobile Styles */
          @media (max-width: 500px) {
            .Hero_Section {
              flex-direction: column;
              height: 2em;
              padding: 1em;
              text-align: center;
            }

            .Hero_Section .hero-text {
              max-width: 100%;
            }

            .Hero_Section h1 {

              font-size: 2em;
              padding-top: 2em;
              padding-bottom: 0.5em;
            }

            .Hero_Section h6 {
              font-size: 1em;
            }

            .Hero_Section p {
              font-size: 0.875em;
              margin: 10px 0;
              padding-bottom: 1em;
            }

            .button-hero {
              min-width: auto;
              padding: 10px 15px;
              font-size: 0.875em;
            }

            .Hero_Section .hero-image {
              display: none;
            }
          }
        `}
      </style>
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h6>Chicago</h6>
        <p>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
        <button className="button-hero">Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src={heroimage} alt="Delicious food" />
      </div>
    </div>
  );
};

export default HeroSection;
