import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaThumbsUp } from 'react-icons/fa';

const Formulario = () => {
  const initialValues = {
    date: '',
    time: '17:00',
    guests: '1',
    occasion: 'Birthday'
  };

  const validationSchema = Yup.object({
    date: Yup.date().required('Date is required'),
    time: Yup.string().required('Time is required'),
    guests: Yup.number().required('Number of guests is required').min(1, 'Must be at least 1').max(10, 'Cannot exceed 10'),
    occasion: Yup.string().required('Occasion is required')
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post('http://localhost:3000/api/reservation', values);
      console.log(response.data);
      toast.success(<div><FaThumbsUp /> Reservation made successfully</div>);
      resetForm();
    } catch (error) {
      console.error('Error making reservation:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="Formulario">
      <style>
        {`
          .Formulario {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 10px;
            width: 60%;
            margin: auto;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }

          .Formulario h2 {
            color: #47674A;
            margin-bottom: 20px;
          }

          .Formulario form {
            display: grid;
            max-width: 200px;
            gap: 20px;
          }

          .Formulario form label {
            margin-bottom: 5px;
            color: #333;
          }

          .Formulario form input,
          .Formulario form select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
          }

          .Formulario form input[type="submit"] {
            background-color: #47674A;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
          }

          .Formulario form input[type="submit"]:hover {
            background-color: #3b5941;
          }

          .error-message {
            color: red;
            font-size: 0.875em;
            margin-top: 5px;
          }

          @media (max-width: 500px) {
            .Formulario {
              padding-bottom: 2em;

            }

            .Formulario h2 {
              font-size: 2em;
              text-align: center;
            }
          }
        `}
      </style>
      <h2>Make Your Reservation</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="date">Choose date</label>
              <Field type="date" id="date" name="date" />
              <ErrorMessage name="date" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="time">Choose time</label>
              <Field as="select" id="time" name="time">
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
              </Field>
              <ErrorMessage name="time" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="guests">Number of guests</label>
              <Field type="number" id="guests" name="guests" min="1" max="10" />
              <ErrorMessage name="guests" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="occasion">Occasion</label>
              <Field as="select" id="occasion" name="occasion">
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </Field>
              <ErrorMessage name="occasion" component="div" className="error-message" />
            </div>

            <button type="submit" onClick={() => isValid && toast.success(<div><FaThumbsUp /> Reservation made successfully</div>)}>
              Make Your Reservation
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default Formulario;
