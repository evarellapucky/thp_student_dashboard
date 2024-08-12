import React from 'react'
import { useState } from 'react'
import InputField from '../Components/InputField'
import { useNavigate } from 'react-router-dom'
import BackButton from '../Components/BackButton';

function Contact() {
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [object, setObject] = useState('');
  const [message, setMessage] = useState('');


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
      <BackButton />
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
