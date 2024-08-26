import React from "react";
import { useState } from "react";
import InputField from "../Components/InputField";
import BackButton from "../Components/BackButton";
import DefaultButton from "../Components/DefaultButton";
import THPLogo from "../Assets/thpLogo.png";

function Contact() {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [object, setObject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, name, object, message });
  };

  return (
    <>
      <BackButton />
      <img src={THPLogo} alt="Logo" className="w-1/3 mx-auto mb-10" />
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col w-full md:w-1/2 bg-gray-100 rounded-lg shadow-lg p-6 mx-4 my-8">
          <p className="text-center text-xl font-bold text-gray-800 mb-4">
            Vous n'avez pas trouvé la réponse à votre question dans notre FAQ ?
          </p>
          <p className=" text-lg text-gray-700 mb-4">
            Pas de souci ! Nous sommes là pour vous aider.</p>
            <p className=" text-lg text-gray-700 mb-4"> Si vous avez des
            questions supplémentaires ou si vous avez besoin de plus
            d'informations, c'est ici que ça se passe. N'hésitez pas à nous
            contacter, et nous vous répondrons dans les plus brefs délais.
          </p>
          <button className="mx-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
            Contactez-nous
          </button>
        </div>

        <div className="flex w-1/3 bg-gray-100 rounded-lg mr-6 mt-10">
          <form onSubmit={handleSubmit} className="w-full w-full mx-auto p-8">
            <div className="flex mb-6">
              <h2 className="text-2xl font-bold mb-6">Nous contacter</h2>
            </div>

            <InputField
              placeholder="Prénom"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <InputField
              placeholder="Nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputField
              placeholder="Objet"
              value={object}
              onChange={(e) => setObject(e.target.value)}
            />
            <InputField
              placeholder="Message"
              isTextArea={true}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <div className="flex justify-end">
              <DefaultButton type="submit">Envoyer</DefaultButton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
