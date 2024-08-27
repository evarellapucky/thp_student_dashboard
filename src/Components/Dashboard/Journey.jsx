import journey_icon from "../../Assets/journey_icon.svg";


function Journey() {
  return (
<div className="card bg-gray-light w-5/6 sm:w-80 h-50 shadow-out">
  <div className="relative">
    <div className="absolute py-2 px-2 text-sm text-white top-0 left-0 bg-secondary rounded-md -translate-x-3 -translate-y-5 shadow-xl">
      <img src={journey_icon} alt="Icône Parcours"/>
    </div>
  </div>
  <div className="card-body">
    <h2 className="card-title mb-2 text-lg sm:text-xl">Mon Parcours</h2>
    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-5">
      <div
        className="radial-progress text-secondary"
        style={{ "--value": 75 }}
        role="progressbar"
      >
        75%
      </div>
      <div className="flex-1 text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
    </div>
  </div>
</div>

  );
}

export default Journey;
