import React from "react";
import { Link } from "react-router-dom";

function HistoriqueButton() {
  return (
    <Link to="/historique">
      <button style={{ padding: "10px 20px", borderRadius: "5px", backgroundColor: "#4CAF50", color: "white", border: "none", cursor: "pointer", position: "absolute", top: "20px", right: "20px" }}>
        Historique
      </button>
    </Link>
  );
}

export default HistoriqueButton;