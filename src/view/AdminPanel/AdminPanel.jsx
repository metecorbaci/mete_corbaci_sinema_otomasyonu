import React from "react";
import { useNavigate } from "react-router-dom";
import { Purchased } from "../../components/AdminPanelSatilanBilet/SatilanBiletComp";
import "./AdminPanel.css";
const Admin = () => {
  let navigate = useNavigate();

  return (
    <div className="admin">
      <div>
        <button className="anaekran-button" onClick={() => navigate("/")}>
        </button>
      </div>
      <Purchased />
    </div>
  );
};

export default Admin;
