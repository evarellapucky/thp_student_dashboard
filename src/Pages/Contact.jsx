import React from 'react'
import { useState } from 'react'
import InputField from '../Components/InputField'
import { useNavigate } from 'react-router-dom'

function Contact() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [object, setObject] = useState('');
  const [message, setMessage] = useState('');

  const handleBackClick = () => {
    navigate(-1); // Go back one page
  };

const handleSubmit = (e) => {
  e.preventDefault()
  console.log({ firstName, name, object, message });
}



  return (
    <div className="flex w-full bg-gray-100">
    <form
      onSubmit={handleSubmit}
      className="w-full w-full mx-auto px-4"
    >
      <div className="flex mb-6">
      <button onClick={handleBackClick} className="focus:outline-none" aria-label="Go back">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-6 h-6 mr-2"
            >
              <path
                fill="#000000"
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
              />
            </svg>
          </button>
      <h2 className="text-2xl font-bold mb-6">Nous contacter</h2>
      </div>
      
      <InputField placeholder="Prénom" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <InputField placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} />
      <InputField placeholder="Objet" value={object} onChange={(e) => setObject(e.target.value)} />
      <InputField placeholder="Message" isTextArea={true} value={message} onChange={(e) => setMessage(e.target.value)} />
      
      <div className="flex justify-end">
          <button
            type="submit"
            className="btn btn-primary mt-4"
          >
            Envoyer
          </button>
        </div>
    </form>
  </div>
);
}

export default Contact
