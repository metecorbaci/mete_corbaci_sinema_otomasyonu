import React from "react";
import { useNavigate } from "react-router-dom";
import { SatilanBiletComp } from "../../components/AdminPanelSatilanBilet/SatilanBiletComp";
import "./AdminPanel.css";
const AdminPanel = () => {
  let navigate = useNavigate();

  return (
    <div className="admin">
      <div>
        <button className="anaekran-button" onClick={() => navigate("/")}>
        </button>
      </div>
      <SatilanBiletComp />
    </div>
  );
};

export default AdminPanel;
