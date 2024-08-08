import Countdown from "../Components/Countdown"

const Today = () => {
    return (
        <>
                <h1 className="text-3xl text-center">Titre de la journée</h1>
            <div className="flex flex-row justify-center space-x-60 mt-6">
                <div className="flex flex-row justify-end">
                    <div className="rounded-lg bg-base-200 p-4 flex flex-col space-y-2 w-96">
                        <input type="text" className="input input-bordered input-primary" />
                        <input type="text" className="input input-bordered input-primary" />
                    </div>
                    <div className="flex items-center ml-12 mr-12">
                        <button className="btn bg-green-500 btn-circle hover:bg-white hover:border-green-500 border border-transparent group">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6 group-hover:stroke-green-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </div>
                </div>
                <Countdown />
            </div>
            <div className="flex justify-center p-4">
                <div className="w-full max-w-4xl">
                    <div className="collapse collapse-arrow bg-base-200 mb-4 border border-blue-500">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium bg-gray-200">Ressource : Bienvenue à THP !</div>
                        <div className="collapse-content bg-white">
                            <p>Bon ok, ch'suis dans la rue chez nous J'voyais rien, je fesse dans une rafale de 6 pieds R'gardez mon pick-up Ch'peux pu avancer Ch't'à peu près à 500 mètres de chez nous Checkez-moi ça la rafale Checkez mon pick-up, j'ai fessé là-d'dans, ça a arrêté ben sec, j'm'suis fessé la face dans l'steering Tabarnak de câlisse de ciboire La la, ça a pas d'allure</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200 mb-4 border border-blue-500">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium bg-gray-200">Click to open this one and close other</div>
                        <div className="collapse-content bg-white">
                            <p>hello Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia placeat excepturi ut velit labore inventore, dolor recusandae repellat alias ipsa, itaque dolores beatae commodi, qui consequatur doloribus tenetur vitae corrupti. Dolorum, voluptatibus dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia placeat excepturi ut velit labore inventore, dolor recusandae repellat alias ipsa, itaque dolores beatae commodi, qui consequatur doloribus tenetur vitae corrupti. Dolorum, voluptatibus dignissimos.s</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200 mb-4 border border-blue-500">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium bg-gray-200">Click to open this one and close others</div>
                        <div className="collapse-content bg-white">
                            <p>helloLorem ipsum dolor sit, amet consectetur adipisicing elit. Officia placeat excepturi ut velit labore inventore, dolor recusandae repellat alias ipsa, itaque dolores beatae commodi, qui consequatur doloribus tenetur vitae corrupti. Dolorum, voluptatibus dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia placeat excepturi ut velit labore inventore, dolor recusandae repellat alias ipsa, itaque dolores beatae commodi, qui consequatur doloribus tenetur vitae corrupti. Dolorum, voluptatibus dignissimos.s</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200 mb-4 border border-red-500">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium bg-gray-200">Click to open this one and close others</div>
                        <div className="collapse-content bg-white">
                            <p>helloLorem ipsum dolor sit, amet consectetur adipisicing elit. Officia placeat excepturi ut velit labore inventore, dolor recusandae repellat alias ipsa, itaque dolores beatae commodi, qui consequatur doloribus tenetur vitae corrupti. Dolorum, voluptatibus dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia placeat excepturi ut velit labore inventore, dolor recusandae repellat alias ipsa, itaque dolores beatae commodi, qui consequatur doloribus tenetur vitae corrupti. Dolorum, voluptatibus dignissimos.s</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200 mb-4 border border-red-500">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium bg-gray-200">Click to open this one and close others</div>
                        <div className="collapse-content bg-white">
                            <p>helloLorem ipsum dolor sit, amet consectetur adipisicing elit. Officia placeat excepturi ut velit labore inventore, dolor recusandae repellat alias ipsa, itaque dolores beatae commodi, qui consequatur doloribus tenetur vitae corrupti. Dolorum, voluptatibus dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia placeat excepturi ut velit labore inventore, dolor recusandae repellat alias ipsa, itaque dolores beatae commodi, qui consequatur doloribus tenetur vitae corrupti. Dolorum, voluptatibus dignissimos.s</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Today