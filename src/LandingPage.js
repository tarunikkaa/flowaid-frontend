import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom"; // Import Link for navigation
import "leaflet/dist/leaflet.css";

const LandingPage = () => {
  const [alerts, setAlerts] = useState([]);
  const [shelters, setShelters] = useState([]);

  useEffect(() => {
    setAlerts([
      { id: 1, location: "City A", severity: "High" },
      { id: 2, location: "City B", severity: "Moderate" },
    ]);
    setShelters([
      { id: 1, lat: 17.385, lng: 78.4867, name: "Relief Camp 1", resources: 50 },
      { id: 2, lat: 17.500, lng: 78.4000, name: "Relief Camp 2", resources: 30 },
    ]);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ color: "#1a73e8" }}>FlowAid - Disaster Response</h1>

      {/* Disaster Alerts Section */}
      <div style={{ background: "#fff3cd", padding: "10px", marginBottom: "20px" }}>
        <h2>⚠️ Disaster Alerts</h2>
        {alerts.map(alert => (
          <p key={alert.id}><strong>{alert.location}:</strong> {alert.severity} Alert</p>
        ))}
      </div>

      {/* Interactive Map */}
      <MapContainer center={[17.385, 78.4867]} zoom={7} style={{ height: "400px", width: "80%", margin: "auto" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {shelters.map((shelter) => (
          <Marker key={shelter.id} position={[shelter.lat, shelter.lng]}>
            <Popup>{shelter.name} - Resources: {shelter.resources}</Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* New Section with 3 Buttons */}
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "15px" }}>
        <Link to="/donors" style={donateButtonStyle}>Donate Now</Link>
        <Link to="/volunteers" style={volunteerButtonStyle}>Register as a Volunteer</Link>
        <Link to="/ngo" style={ngoButtonStyle}>Register if part of an NGO</Link>
      </div>
    </div>
  );
};

// Button Styles
const buttonStyle = {
  display: "inline-block",
  backgroundColor: "#1a73e8",
  color: "white",
  padding: "12px 20px",
  fontSize: "1rem",
  fontWeight: "bold",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  textDecoration: "none",
  textAlign: "center"
};

const donateButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#28a745"
};

const volunteerButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#ff5733"
};

const ngoButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#f39c12"
};

export default LandingPage;