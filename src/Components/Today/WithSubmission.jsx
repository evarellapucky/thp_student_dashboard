import { useState, useEffect } from "react";
import InputField from "../InputField";
import Countdown from "./Countdown.jsx";

const WithSubmission = ({
  countdownMode,
  isCountdownActive,
  onCountdownEnd,
}) => {
  const [fileName, setFileName] = useState(() => {
    const savedFileName = localStorage.getItem("fileName");
    return savedFileName !== null ? savedFileName : "";
  });

  const [fileLink, setFileLink] = useState(() => {
    const savedFileLink = localStorage.getItem("fileLink");
    return savedFileLink !== null ? savedFileLink : "";
  });

  const [projectTitle, setProjectTitle] = useState(fileName);
  const [projectLink, setProjectLink] = useState(fileLink);

  useEffect(() => {
    localStorage.setItem("fileName", projectTitle);
    localStorage.setItem("fileLink", projectLink);
  }, [projectTitle, projectLink]);

  const handleSubmit = () => {
    console.log("Submitting fileName:", fileName);
    console.log("Submitting fileLink:", fileLink);

    if (fileName && fileLink) {
      setProjectTitle(fileName);
      setProjectLink(fileLink);

      setFileName("");
      setFileLink("");
    } else {
      console.error("fileName or fileLink is empty.");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center">
        Projet à rendre
      </h1>
      {countdownMode && isCountdownActive && (
        <div className="w-full flex justify-center mt-4">
          <Countdown mode={countdownMode} onCountdownEnd={onCountdownEnd} />
        </div>
      )}
      <div className="flex flex-col md:flex-row justify-start items-center mt-6 space-y-6 md:space-y-0 md:space-x-12 w-full max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between w-full">
          <div className="rounded-lg p-4 flex flex-col space-y-2 w-full md:w-1/2">
            <InputField
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              placeholder="Nom du fichier"
            />
            <InputField
              type="text"
              value={fileLink}
              onChange={(e) => setFileLink(e.target.value)}
              placeholder="Lien du Repo"
            />
          </div>
          <div className="flex items-center justify-center md:justify-start mt-2 md:mt-0 md:ml-6 w-full md:w-auto">
            <button
              type="button"
              onClick={handleSubmit}
              className="btn bg-green btn-circle shadow-lg hover:bg-white hover:border-green border border-transparent group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="size-6 group-hover:stroke-green"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col md:flex-row md:justify-around w-full md:w-1/2 mt-4 md:mt-0 md:ml-6">
            <h4>
              <span className="font-bold">Nom du fichier : </span>
              {projectTitle}
            </h4>
            <h4>
              <span className="font-bold">Lien du fichier : </span>
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue hover:underline"
              >
                {projectLink}
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithSubmission;
