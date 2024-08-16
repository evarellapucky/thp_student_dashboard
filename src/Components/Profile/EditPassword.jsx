import React from "react";
import { useState } from "react";
import BigModal from "../BigModal";
import { useAtom } from 'jotai';
import { modalOpenAtom } from "../Atom/atoms";
import { useResetAtom } from "jotai/utils";

function EditPassword() {
  const [, setIsOpen] = useAtom(modalOpenAtom);
  const [email,setEmail] = useState("samantha.belzebuth@gmail.com");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    setIsOpen(false);
  }

  return(
    <div>
      <h2>Modifier mon mot de passe</h2>
      <form onSubmit={handleSubmit}>

        <div className="flex flex-col items-center gap-3">
          <div className="w-full md:w-4/5 lg:w-2/5">
            <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full"
            />
          </div>
          <div className="w-full md:w-4/5 lg:w-2/5">
            <input
                type="password"
                name="oldPassword"
                placeholder="Ancien mot de passe"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="input input-bordered w-full"
            />
          </div>
          <div className="w-full md:w-4/5 lg:w-2/5">
            <input
                type="password"
                name="newPassword"
                placeholder="Nouveau mot de passe"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="input input-bordered w-full"
            />
          </div>
          <div className="w-full md:w-4/5 lg:w-2/5">
            <input
                type="password"
                name="confirmNewPassword"
                placeholder="Confirmer nouveau mot de passe"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                className="input input-bordered w-full"
            />
          </div>
        </div>

          <div className="md:absolute bottom-0 left-0 right-0 flex justify-center gap-3 p-4 bg-white">
              <button type="submit" className="btn btn-primary">Valider</button>
              <button className="btn btn-error" onClick={handleCloseModal}>Annuler</button>
          </div>
      </form>
    </div>
  )
}

export default EditPassword;