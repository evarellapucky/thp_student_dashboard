import { useState, useEffect } from "react";
import axios from "axios";
import WithSubmission from "../Components/Today/WithSubmission";
import Correction from "../Components/Today/Correction";
import CollapseBarWithFavorite from "../Components/CollapseBarWithFavorite";
import useFavorites from "../Components/useFavorites";

const Today = () => {
  const [resources, setResources] = useState([]);
  const [dayState, setDayState] = useState("");
  const [isCountdownActive, setIsCountdownActive] = useState(true);
  const [showCorrections, setShowCorrections] = useState(() => {
    const savedShowCorrections = localStorage.getItem("showCorrections");
    return savedShowCorrections !== null ? JSON.parse(savedShowCorrections) : true;
  });

  const { favorites, toggleFavorite } = useFavorites();

  // Fonction pour obtenir la date du jour au format "DD-MM-YYYY"
  const getCurrentDateString = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/YannRZG/Missions-THP/main/Resources.json"
        );

        const currentDateString = getCurrentDateString();
        const newResources = [];

        Object.values(response.data).forEach((category) => {
          category.forEach((week) => {
            week.days.forEach((day) => {
              if (day.date === currentDateString && day.resources) {
                newResources.push(...day.resources);
              }
            });
          });
        });

        setResources(newResources);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchData();
  }, []);

  const countdownMode =
    dayState === "withSubmission"
      ? "untilMidnight"
      : dayState === "correction"
      ? "untilNoon"
      : null;

  const handleCountdownEnd = () => {
    setIsCountdownActive(false);
    if (dayState === "correction") {
      setShowCorrections(false);
      localStorage.setItem("showCorrections", JSON.stringify(false));
    }
  };

  return (
    <>
      {dayState === "withSubmission" && (
        <WithSubmission
          countdownMode={countdownMode}
          isCountdownActive={isCountdownActive}
          onCountdownEnd={handleCountdownEnd}
        />
      )}

      {dayState === "correction" && (
        <Correction
          countdownMode={countdownMode}
          isCountdownActive={isCountdownActive}
          onCountdownEnd={handleCountdownEnd}
          showCorrections={showCorrections}
        />
      )}

      <div className="flex justify-center p-4 mt-6">
        <div className="w-full max-w-6xl">
          <h1 className="text-center">BLABLA du jour</h1>
          <h5 className="text-center m-6">
            Le blabla du jour est le blabla qui va suivre le blabla du jour.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            cupiditate eveniet repellendus tempora similique, dolores magni
            ducimus beatae deserunt at odio hic quam tenetur itaque quisquam.
            Cumque quo hic itaque.
          </h5>
          {resources.map((resource, index) => (
            <CollapseBarWithFavorite
              key={index}
              title={resource.title}
              content={resource.content}
              borderColor="border-secondary"
              isFavorite={favorites.includes(resource.id)}
              toggleFavorite={() => toggleFavorite(resource.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Today;
