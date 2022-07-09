import React, { useState } from "react";
import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
    const [activeInfoWindow, setActiveInfoWindow] = useState("");

    const containerStyle = {
        width: "100%",
        height: "500px",
    }

    const center = {
        lat: 35.41450706599295,
        lng: 129.49951098482583,
    }

    const mapClicked = (event) => {
        console.log(event.latLng.lat(), event.latLng.lng())
    }

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
                onClick={mapClicked}
            >
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;