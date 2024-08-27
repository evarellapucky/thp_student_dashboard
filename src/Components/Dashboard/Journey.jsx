import journey_icon from "../../Assets/journey_icon.svg";


function Journey() {
  return (
<div className="card bg-base-100 w-5/6 sm:w-80 h-44 shadow-out">
  <div className="relative">
    <div className="absolute py-2 px-2 text-sm text-white top-0 left-0 bg-secondary rounded-md -translate-x-3 -translate-y-5 shadow-lightOut">
      <img src={journey_icon} alt="Icône Parcours"/>
    </div>
  </div>
  <div className="card-body">
    <h4 className="card-title mb-2">Mon Parcours</h4>
    <div className="flex flex-row items-start gap-3 sm:gap-5">
      <div
        className="radial-progress text-secondary"
        style={{ "--value": 75 }}
        role="progressbar"
      >
        75%
      </div>
      <div className="flex items-center">
      <p className="flex  justify-center">
        Développeur ++
      </p>
      </div>
    </div>
  </div>
</div>

  );
}

export default Journey;
