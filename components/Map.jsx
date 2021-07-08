import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Map() {
  const containerStyle = {
    width: "100%",
    minHeight: "500px",
  };

  const center = {
    lat: 52.847471,
    lng: 17.732724,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.MAP_API}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
