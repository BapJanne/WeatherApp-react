import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink className="link" to="/">
        Accueil
      </NavLink>
      <NavLink className="link" to="/User">
        Profil
      </NavLink>
    </div>
  );
};

export default Navigation;
