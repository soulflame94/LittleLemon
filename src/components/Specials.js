import React from 'react';
import special1 from '../components/assets/special1.jpg';
import special2 from '../components/assets/special2.jpg';
import special3 from '../components/assets/special3.jpg';

const Highlights = () => {
  return (
    <div className="Highlights-Container">
      <style>
        {`
          /* Highlights1 */
          .Highlights1 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 40px 20px;
            background-color: #f4f4f4;
          }

          .Highlights1 h2 {
            color: #47674A;
            text-align: left;
          }

          .Highlights1 .button {
            background-color: #000;
            color: #fff;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            min-width: 12em;
            border-radius: 8px;
          }

          /* Highlights-Container */
          .Highlights-Container {
            background-color: #f4f4f4;
            padding: 5% 15%;
            height: 842px;
          }

          /* Highlights1 */
          .Highlights1 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
          }

          .Highlights1 h2 {
            color: #47674A;
            margin: 0;
          }

          .Highlights1 .button {
            background-color: #000;
            color: #fff;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            min-width: 12em;
            border-radius: 8px;
          }

          /* Highlights2 */
          .Highlights2 {
            display: flex;
            justify-content: space-around;
            gap: 20px;
          }

          .Highlights2 .highlight-item {
            text-align: center;
            max-width: 340px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding-bottom: 3%;
          }

          .Highlights2 .highlight-item img {
            width: 100%;
            height: 300px;
            border-radius: 10px;
          }

          .Highlights2 .highlight-item p {
            padding: 0 5%;
            margin: 10px 0;
          }

          .Highlights2 .highlight-item .button-link {
            display: block;
            margin-top: 10px;
            text-decoration: none;
            color: #000;
            background-color: #fff;
            padding: 10px 20px;
            border: 1px solid #000;
            border-radius: 8px;
            transition: background-color 0.3s, color 0.3s;
          }

          .Highlights2 .highlight-item .button-link:hover {
            background-color: #000;
            color: #fff;
          }

          /* Mobile Styles */
          @media (max-width: 768px) {
            .Highlights-Container {
              padding: 2%;
              height: auto;
            }

            .Highlights2 {
              flex-direction: row;
              flex-wrap: wrap;
              gap: 10px;
              justify-content: center;
            }

            .Highlights2 .highlight-item {
              max-width: 90px;
              padding: 10px;
            }

            .Highlights2 .highlight-item img {
              height: 100px;
            }

            .Highlights2 .highlight-item p {
              font-size: 0.65em;
              margin: 5px 0;
            }

            .Highlights2 .highlight-item .button-link {
              padding: 5px 10px;
              font-size: 0.75em;
            }

            .Highlights1 h2 {
              font-size: 2em;
            }

            .Highlights1 .button {
              padding: 5px 10px;
              font-size: 0.875em;
              min-width: 8em;
            }
          }
        `}
      </style>

      <div className="Highlights1">
        <h2>Specials</h2>
        <button className="button">Menu</button>
      </div>
      <div className="Highlights2">
        <div className="highlight-item">
          <img src={special1} alt="Special 1" />
          <p>Greek Salad - $12.00</p>
          <p>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
          <a href="#order" className="button-link">Order Delivery</a>
        </div>
        <div className="highlight-item">
          <img src={special2} alt="Special 2" />
          <p>Bruschetta - $10.00</p>
          <p>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
          <a href="#order" className="button-link">Order Delivery</a>
        </div>
        <div className="highlight-item">
          <img src={special3} alt="Special 3" />
          <p>Lemon Dessert - $8.00</p>
          <p>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
          <a href="#order" className="button-link">Order Delivery</a>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
