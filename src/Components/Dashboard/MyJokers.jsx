import React from "react"
import Joker from "../../Public/Images/Joker.png"

function MyJokers() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card bg-base-100 w-96">
        <div className="relative">
          <div className="absolute py-2 px-2 text-sm text-white top-0 left-0 bg-red-600 rounded-md -translate-x-3 -translate-y-5 shadow-xl">
            <svg
              dataSlot="icon"
              aria-hidden="true"
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="32px"
              height="32px"
            >
              <path
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">Mes jokers</h2>
        <div className="flex items-center justify-center"></div>
        <div className="flex flex-row 3 gap-2 mt-2">
          <div className="border-2 rounded-lg">
            <img src={Joker} alt="Chapeau de clown" />
          </div>
          <div className="border-2 rounded-lg">
            <img src={Joker} alt="Chapeau de clown" />
          </div>
          <div className="border-2 rounded-lg">
            <img src={Joker} alt="Chapeau de clown" />
          </div>
        </div>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
}

export default MyJokers;
