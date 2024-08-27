import journey_icon from "../../Assets/journey_icon.svg";


function Journey() {
  return (
<div className="card bg-base-100 w-5/6 sm:w-80 h-50 shadow-out">
  <div className="relative">
    <div className="absolute py-2 px-2 text-sm text-white top-0 left-0 bg-blue-600 rounded-md -translate-x-3 -translate-y-5 shadow-xl">
      <img src={journey_icon} alt="Icône Parcours"/>
    </div>
  </div>
  <div className="card-body">
    <h4 className="card-title mb-2">Mon Parcours</h4>
    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-5">
      <div
        className="radial-progress text-blue-600"
        style={{ "--value": 75 }}
        role="progressbar"
      >
        75%
      </div>
      <p className="flex-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  </div>
</div>

  );
}

export default Journey;
