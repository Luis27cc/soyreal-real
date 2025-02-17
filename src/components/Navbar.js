import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul style={{ display: "flex", gap: "15px", listStyle: "none", padding: "10px", backgroundColor: "#f4f4f4" }}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/test-autoestima">Test de Autoestima</Link></li>
        <li><Link to="/galeria">Galería</Link></li>
        <li><Link to="/foro">Foro</Link></li>
        <li><Link to="/recursos">Recursos</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
