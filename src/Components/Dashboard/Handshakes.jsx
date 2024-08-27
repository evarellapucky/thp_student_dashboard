import Handshake from "../../Public/Images/Handshake.png"
import handshake_icon from "../../Assets/handshake_icon.svg"

function Handshakes() {
  return (
    <div className="card bg-gray-light w-5/6 sm:w-80 h-56 shadow-out">
            <div className="relative">
              <div className="absolute py-2 px-2 text-sm text-white top-0 left-0 bg-success rounded-md -translate-x-3 -translate-y-5 shadow-lightOut">
             <img src={handshake_icon} alt="Icône poignées de mains"/>
              </div>
            </div>
          <div className="card-body">
            <h2 className="card-title text-lg sm:text-xl">Mes coups de mains</h2>
            <div className="flex items-center justify-around mt-5">
              <div className="font-bold text-3xl">
                123
              </div>
              <div className="mr-5">
                <img src={Handshake} alt="Poignées de mains" className="w-24"/>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Handshakes