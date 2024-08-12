import React from 'react'
import { useState } from 'react'
import InputField from '../Components/InputField'

function Contact() {

const handleSubmit = (e) => {
  e.preventDefault()
}

  return (
    <div className="flex bg-gray-100">
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg px-4"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Contact</h2>
      
      <InputField placeholder="Prénom" />
      <InputField placeholder="Nom" />
      <InputField placeholder="Objet" />
      <InputField placeholder="Message" isTextArea={true} />
      
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
