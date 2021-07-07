import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultCenter={{ lat: 52.847471, lan: 17.732724 }}
      defaultZoom={14}
    />
  );
}

export const WrappedMap = withScriptjs(withGoogleMap(Map));
