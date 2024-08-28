import{ useState } from "react";
import InputField from "../Components/InputField";
import BackButton from "../Components/BackButton";
import DefaultButton from "../Components/DefaultButton";
import THPLogo from "../Assets/thpLogo.svg";

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
      <div className="flex justify-center mb-10">
        <img src={THPLogo} alt="Logo" className="w-1/2 md:w-1/3 lg:w-1/4" />
      </div>
      <div className="flex flex-col md:flex-row justify-evenly items-start md:space-x-6 px-4">
        {/* Information Section */}
        <div className="flex flex-col w-full md:w-1/2 bg-base-100 rounded-lg shadow-lightOut p-6 mb-8 md:mb-0">
          <h4 className="text-center font-bold text-gray-darker mb-4">
            Vous n'avez pas trouvé la réponse à votre question dans notre FAQ ?
          </h4>
          <p className="mb-4 text-gray-dark">
            Pas de souci ! Nous sommes là pour vous aider.
          </p>
          <p className="mb-4 text-gray-dark">
            Si vous avez des questions supplémentaires ou si vous avez besoin de plus d'informations, c'est ici que ça se passe. N'hésitez pas à nous contacter, et nous vous répondrons dans les plus brefs délais.
          </p>
        </div>

        {/* Form Section */}
        <div className="flex w-full md:w-1/2 bg-base-100 rounded-lg shadow-lightOut p-6">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-6">
              <h2 className="font-bold mb-4">Nous contacter</h2>
            </div>

            <InputField
              placeholder="Prénom"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mb-4"
            />
            <InputField
              placeholder="Nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-4"
            />
            <InputField
              placeholder="Objet"
              value={object}
              onChange={(e) => setObject(e.target.value)}
              className="mb-4"
            />
            <InputField
              placeholder="Message"
              isTextArea={true}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mb-4"
            />

            <div className="flex justify-end">
              <DefaultButton type="submit" color="btn-success">Envoyer</DefaultButton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
