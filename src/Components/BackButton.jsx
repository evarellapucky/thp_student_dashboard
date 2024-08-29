import { useNavigate } from 'react-router-dom'
useNavigate

function BackButton() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1); // Go back one page
  };
  return (
    <div>
      <button onClick={handleBackClick} className="focus:outline-none" aria-label="Go back">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-6 h-6 mr-2"
            >
              <path
                fill="#000000"
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
              />
            </svg>
          </button>
    </div>
  )
}

export default BackButton
