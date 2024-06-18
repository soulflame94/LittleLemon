import React from 'react';
import face1 from '../images/face1.jpg';
import face2 from '../images/face2.jpg';
import face3 from '../images/face3.jpg';
import face4 from '../images/face4.jpg';

const Testimonials = () => {
  return (
    <div className="Testimonials">
      <style>
        {`
          /* Testimonials */
          .Testimonials {
            background-color: #F4CE14;
            padding: 40px 20px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 542px;
          }

          .Testimonials-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
          }

          .Testimonials h2 {
            color: #47674A;
          }

          .Testimonials .testimonial-item {
            background-color: #47674A;
            color: #fff;
            padding: 10px;
            border-radius: 5px;
            margin: 10px;
            text-align: center;
            min-height: 15.5em;
            max-width: 12.5em;
            flex: 1 0 21%; /* Adjusts for larger screens */
            box-sizing: border-box;
          }

          .Testimonials .testimonial-item .rating {
            font-weight: bold;
            margin-bottom: 10px;
          }

          .Testimonials .testimonial-item .userandrating {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .Testimonials .testimonial-item img {
            width: 100px;
            height: 100px;
            border-radius: 10%;
            margin-bottom: 10px;
            padding-right: 2%;
          }

          .Testimonials .testimonial-item h3 {
            color: #F4CE14;
          }

          .Testimonials .testimonial-item p {
            color: #F4CE14;
            font-size: 24px;
          }

          .Testimonials .testimonial-item .username {
            margin-top: 10px;
          }

          /* Mobile Styles */
          @media (max-width: 768px) {
            .Testimonials h2 {
              font-size: 2em;
            }

            .Testimonials {
              padding: 20px 10px;
              height: auto;
            }

            .Testimonials .testimonial-item {
              min-height: auto;
              max-width: 45%;
              flex: 1 0 45%;
              padding: 10px;
              margin: 5px;
            }

            .Testimonials .testimonial-item img {
              width: 50px;
              height: 50px;
            }

            .Testimonials .testimonial-item p {
              font-size: 14px;
            }

            .Testimonials .testimonial-item h3 {
              font-size: 18px;
            }

            .Testimonials .testimonial-item .username {
              font-size: 14px;
            }
          }
        `}
      </style>

      <h2>Testimonials</h2>
      <div className="Testimonials-container">
        <div className="testimonial-item">
          <h3>Rating</h3>
          <div className="userandrating">
            <img src={face1} alt="User 1" />
            <p>5.0⭐</p>
          </div>
          <p className="username">John Doe</p>
        </div>
        <div className="testimonial-item">
          <h3>Rating</h3>
          <div className="userandrating">
            <img src={face2} alt="User 2" />
            <p>5.0⭐</p>
          </div>
          <p className="username">John Doe</p>
        </div>
        <div className="testimonial-item">
          <h3>Rating</h3>
          <div className="userandrating">
            <img src={face3} alt="User 3" />
            <p>5.0⭐</p>
          </div>
          <p className="username">John Doe</p>
        </div>
        <div className="testimonial-item">
          <h3>Rating</h3>
          <div className="userandrating">
            <img src={face4} alt="User 4" />
            <p>5.0⭐</p>
          </div>
          <p class="username">John Doe</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
