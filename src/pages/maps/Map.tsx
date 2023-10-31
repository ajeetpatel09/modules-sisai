import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import style from "./map.module.css";
import { NavLink } from "react-router-dom";

const Map = () => {
  return (
    <>
    <NavLink to='/'>
        <button>Go Back</button>
    </NavLink>
      <div className={style.mapDiv}>
        <MapContainer
          center={[20.5937, 78.9629]}
          zoom={2}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <MarkerClusterGroup>
            <Marker
              position={[26.7812042, 82.1815283]}
            //   for custome icon
              //   icon={new L.Icon({
              //     iconUrl: <EnvironmentOutlined />,
              //     iconSize: [40, 40],
              //   })}
            >
              <Popup>Current Location</Popup>
            </Marker>
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
