import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const Map = () => {
  const position = [51.505, -0.09];
  const icon = L.icon({
    iconRetinaUrl: iconRetina,
    iconUrl: iconMarker,
    shadowUrl: iconShadow,
  });
  return (
    <div className="mt-16">
      <h1 className="text-4xl text-center font-bold capitalize">
        Location of our main office
      </h1>
      <div className="mt-5">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={icon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        ,
      </div>
    </div>
  );
};

export default Map;
