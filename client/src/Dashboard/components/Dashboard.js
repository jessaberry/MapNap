// import React from "react";
import { Provider } from "react-redux";
import store from "../../reducers/store";
import DropdownMenu from "./DropDownMenu";
import "./Dashboard.css";
import Card from "./card";
import { useNavigate } from "react-router-dom";
import PopupForm from "./PopupForm";
import React, { useState } from "react";
import SocialButtons from "../../sharing/SocialButtons";
import { NavBar } from "../../content/widgets/navigation/nav-bar.mjs";

function Dashboard() {
  const navigate = useNavigate();
  const [isFormOpen, setFormOpen] = useState(false);

  const handleAddTrip = () => {
    // TODO: Implement logic to handle adding a trip.json
        //setFormOpen(true);
        navigate('/trip');
    console.log("Add Trip button clicked!");
  };

  const handleSubmit = (formData) => {
    // Handle form submission logic here
    console.log(formData);
    setFormOpen(false);
  };

  const handleClose = () => {
    setFormOpen(false);
  };

  return (
    <div className="page-layout">
      <NavBar />

      <h1>Dashboard</h1>

      <div className="trip-button">
        <button onClick={handleAddTrip}>Add Trip</button>
      </div>
      {isFormOpen && (
        <PopupForm onSubmit={handleSubmit} onClose={handleClose} />
      )}
      {/* Other components and content */}
      <div className="card-gallery">
        <Card />
      </div>
    </div>
  );
}
export default Dashboard;
