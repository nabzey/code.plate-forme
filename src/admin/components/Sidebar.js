import React from "react";
import { Link } from "react-router-dom";
import "../../components/component.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Mediclic</span>
      </div>
      <div className="bottom">
        <ul>
          <li>
            <span>Tableau de bord</span>
          </li>
          <hr />
          <Link to="departement">
            <li>
              <span>Departement</span>
            </li>
          </Link>
          <hr />
          <Link to="medecin">
            <li>
              <span>Medecin</span>
            </li>
          </Link>
          <hr />
         <Link to="/infirmier">
         <li>
            <span>Infirmier</span>
          </li>  
         </Link>
          <hr />
         <Link to="pharmacie">
         <li>
            <span>Pharmacie</span>
          </li>
         </Link>
          <hr />
         <Link to="patient">
         <li>
            <span>Patient</span>
          </li>
         </Link>
          <hr />
          <Link to="laboratoire">
          <li>
            <span>Laboratoire</span>
          </li>
          </Link>
          <hr />
          <Link to="reglages">
          <li>
            <span>Reglages</span>
          </li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
