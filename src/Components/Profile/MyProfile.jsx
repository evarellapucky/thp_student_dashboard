import React from "react";
import { useState, useEffect } from "react";
import { useDropzone } from 'react-dropzone';
import { useAtom } from "jotai";
import { modalContentAtom, modalOpenAtom } from '../Atom/atoms';
import BigModal from "../BigModal";
import EditProfile from "./EditProfile";
import EditPassword from "./EditPassword";
import axios from "axios";

function MyProfile() {
  const [showDropzone, setShowDropzone] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [, setIsOpen] = useAtom(modalOpenAtom);
  const [, setContent] = useAtom(modalContentAtom);
  const [profileData, setProfileData] = useState([]);
  const [myId, setMyId] = useState("16");

  useEffect(() => {
    const fetchUser = async () => {
        try {
            const response = await axios.get(
                // "https://raw.githubusercontent.com/evarellapucky/thp_student_dashboard/dev/src/Data/Users.json"
                "https://raw.githubusercontent.com/tommy-pellerin/json_refont_thp/main/Users.json"
            );
            // On ne peut pas utiliser une URL dynamique car on utilise un JSON statique sur Github. On doit d'abord récupérer le fichier JSON complet, puis filtrer les données pour obtenir l'utilisateur spécifique
            const selectedUser = response.data.users.find(user => user.id === myId);
            console.log(selectedUser);
            setProfileData(selectedUser);
        } catch (error) {
            console.error("Erreur lors de la récupération des users :", error);
        }
    };

    fetchUser();

  }, []);

  const handleOpenEditProfileModal = () => {
    setContent(<EditProfile/>)
    setIsOpen(true);
  };

  const handleOpenEditPasswordModal = () => {
    setContent(<EditPassword/>)
    setIsOpen(true);
  };

  const handleButtonClick = () => {
    setShowDropzone(!showDropzone);
  };

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
    console.log(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1
  });

  const handleSaveClick = () => {
    // Logique pour sauvegarder l'avatar
    console.log("Avatar sauvegardé");
    setImagePreview(null)
    setShowDropzone(false);
  };

  const handleCancel = () => {
    console.log("Avatar annulé");
    setImagePreview(null)
    setShowDropzone(false);
  };

  function extractLink(htmlString) {
    //on doit s'assurer que la chaîne de caractères passée à extractLink n'est pas undefined
    if (!htmlString) return null;
    const regex = /<a href='(.*?)' class='hover:underline'>.*?<\/a>/;
    const match = htmlString.match(regex);
    return match ? match[1] : null;
  }

  return(
    <>
      <h1>Mon profil</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 CheckboxGroup">
        <div className="col-span-1 md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 m-5">
            <div>
              <h4>Prénom</h4>
              <p>{profileData.prenom}</p>
            </div>

            <div>
              <h4>Nom</h4>
              <p>{profileData.nom}</p>
            </div>

            <div>
              <h4>Ville</h4>
              <p>{profileData.ville}</p>
            </div>

            <div>
              <h4>Téléphone</h4>
              <p>{profileData.phone}</p>
            </div>
          </div>
        </div>

        <div className="text-center p-5">
            <div className="h-72 w-full overflow-hidden">
              <img src={imagePreview || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} alt="Avatar" className="w-full h-full object-cover" />
            </div>
            {!showDropzone && (
            <button className="flex border-2 p-2 mt-2" onClick={handleButtonClick}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
              Modifier mon avatar
            </button>
            )}
            {showDropzone && (
              <div {...getRootProps({ className: 'dropzone' })} className="flex border-2 p-2 cursor-pointer mt-2">
                <input {...getInputProps()} />
                <div className="border-2 border-dashed p-5">
                  <p>Déposez les fichiers ici, ou cliquez pour sélectionner des fichiers</p>
                </div>
              </div>
            )}
            {showDropzone && (
              <div className="flex justify-center gap-2 mt-2">
                <button className="border-2 p-2" onClick={handleSaveClick}>
                  Sauvegarder
                </button>
                <button className="border-2 p-2" onClick={handleCancel}>
                  Annuler
                </button>
              </div>
            )}
          <div className="flex justify-around m-5">
            <a href={`${extractLink(profileData.github)}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="80" height="80"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
            </a>
            <a href={`${extractLink(profileData.linkedin)}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="80" height="80"> <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
            </a>
          </div>
        </div>
        
      </div>

      <div className="flex flex-wrap gap-3">
        <button className="flex border-2 p-2" onClick={handleOpenEditProfileModal}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
          Modifier mon profil
        </button>

        <button className="flex border-2 p-2" onClick={handleOpenEditPasswordModal}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
          </svg>

          Modifier mon mot de passe
        </button>

        <button className="flex border-2 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
          Supprimer mon profil
        </button>
      </div>
      {<BigModal/>}
    </>
  )
}

export default MyProfile;