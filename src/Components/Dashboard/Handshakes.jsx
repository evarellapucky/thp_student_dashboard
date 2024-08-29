import Handshake from "../../Public/Images/Handshake.png"
import handshake_icon from "../../Assets/handshake_icon.svg"
import PropTypes from 'prop-types';

function Handshakes({ handshakes }) {
  return (
        <div className="card bg-base-100 w-5/6 max-w-80 xl:w-full h-44 shadow-out">
            <div className="relative">
              <div className="absolute py-2 px-2 text-sm text-white top-0 left-0 bg-success rounded-md -translate-x-3 -translate-y-5 shadow-lightOut">
                <img src={handshake_icon} alt="Icône poignées de mains"/>
              </div>
            </div>
          <div className="card-body">
            <h4 className="card-title">Mes coups de mains</h4>
            <div className="flex items-center justify-around ">
              <h2>
                {handshakes}
              </h2>
              <div className="mr-5">
                <img src={Handshake} alt="Poignées de mains" className="w-24"/>
              </div>
            </div>
          </div>
        </div>
  )
}

Handshakes.propTypes = {
  handshakes: PropTypes.number
}

export default Handshakes