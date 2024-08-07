import React from "react";
import Joker from "../Public/Images/Joker.png"
import Handshake from "../Public/Images/Handshake.png"

function DashboardCards() {

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-2 w-full">
        <div className="card left-7 top-7 bg-base-100 w-96 shadow-xl">
          <div className="card bg-base-100 w-96">
            <div className="relative">
              <div className="absolute py-2 px-2 text-sm text-white top-0 left-0 bg-blue-600 rounded-md transform -translate-x-3 -translate-y-5 shadow-xl">
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
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title mb-2">Mon Parcours</h2>
            <div className="flex flex-row items-start gap-5">
              <div
                className="radial-progress"
                style={{ "--value": 75 }}
                role="progressbar"
              >
                75%
              </div>
              <div className="flex-1 ml-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati iste sed et ullam officiis consequatur.
              </div>
            </div>
          </div>
        </div>
        <div className="card left-7 top-7 bg-base-100 w-96 shadow-xl">
          <div className="card bg-base-100 w-96">
            <div className="relative">
              <div className="absolute py-2 px-2 text-sm text-white top-0 left-0 bg-yellow-600 rounded-md transform -translate-x-3 -translate-y-5 shadow-xl">
                <svg
                  dataSlot="icon"
                  aria-hidden="true"
                  fill="white"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32px"
                  height="32px"
                >
                  <path d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2c0 0 0 0 0 0s0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4l0 3.4 0 5.7 0 26.3zm32 0l0-32 0-25.9c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 44.2-86 80-192 80S0 476.2 0 432l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">Mes points</h2>
            <div className="flex flex-col items-center p-2 mt-2 gap-5">
              <div className="text-white font-semibold">23 575</div>
              <div className="text-white font-semibold">Rank : 10e</div>
            </div>

            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card left-7 top-7 bg-base-100 w-96 shadow-xl">
          <div className="card bg-base-100 w-96">
            <div className="relative">
              <div className="absolute py-2 px-2 text-sm text-white top-0 left-0 bg-red-600 rounded-md transform -translate-x-3 -translate-y-5 shadow-xl">
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
            <div className="flex flex-row 3">
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
        <div className="card left-7 top-7 bg-base-100 w-96 shadow-xl">
          <div className="card bg-base-100 w-96">
            <div className="relative">
              <div className="absolute py-2 px-2 text-sm text-white top-0 left-0 bg-green-600 rounded-md transform -translate-x-3 -translate-y-5 shadow-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  height="32px"
                  width="32px"
                  fill="white"
                >
                  <path d="M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9C142.8 171 129.5 176 115.8 176L96 176l0 128c20.4 .6 39.8 8.9 54.3 23.4l35.6 35.6 7 7c0 0 0 0 0 0L219.9 397c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4 .6 22.2 6.5L296.5 393c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2L505.1 128l38.9 0 40 0 40 0c8.8 0 16 7.2 16 16l0 208c0 17.7-14.3 32-32 32l-32 0c-11.8 0-22.2-6.4-27.7-16l-84.9 0c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3C96 369.7 81.6 384 64 384l-32 0c-17.7 0-32-14.3-32-32L0 144c0-8.8 7.2-16 16-16l40 0 40 0 19.8 0c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64L259 64c4.4 0 8.9 .2 13.2 .6zM544 320l0-144-48 0c-5.9 0-11.6-2.2-15.9-6.1l-36.9-32.8c-18.2-16.2-41.7-25.1-66.1-25.1c-25.4 0-49.8 9.7-68.3 27.1l-70.1 66.2c-10.3 9.8-10.1 26.3 .5 35.7c9.3 8.3 23.4 8.1 32.5-.3l71.9-66.4c9.7-9 24.9-8.4 33.9 1.4s8.4 24.9-1.4 33.9l-.8 .8 74.4 74.4c10 10 16.5 22.3 19.4 35.1l74.8 0zM64 336a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm528 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">Mes coups de mains</h2>
            <div className="flex flex-row items-center gap-5">
              <div className="text-white font-bold flex-grow w-1/5">
                123
              </div>
              <div className="flex-shrink-0 w-4/5">
                <img src={Handshake} alt="Poignées de mains" className="w-48"/>
              </div>
            </div>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardCards;
