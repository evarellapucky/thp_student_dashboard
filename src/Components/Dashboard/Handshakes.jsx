import Handshake from "../../Public/Images/Handshake.png"
import handshake_icon from "../../Assets/handshake_icon.svg"

function Handshakes() {
  return (
    <div className="card bg-base-100 w-5/6 sm:w-80 h-44 shadow-out">
            <div className="relative">
              <div className="absolute py-2 px-2 text-white top-0 left-0 bg-green-600 rounded-md -translate-x-3 -translate-y-5 shadow-xl">
                <img src={handshake_icon} alt="Icône poignées de mains"/>
              </div>
            </div>
          <div className="card-body">
            <h4 className="card-title">Mes coups de mains</h4>
            <div className="flex items-center justify-around ">
              <h2>
                123
              </h2>
              <div className="mr-5">
                <img src={Handshake} alt="Poignées de mains" className="w-24"/>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Handshakes