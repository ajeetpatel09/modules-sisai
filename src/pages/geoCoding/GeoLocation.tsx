import { NavLink } from "react-router-dom";
import { useState } from "react";
import style from "./geolocation.module.css";

const GeoLocation = () => {
    const [location, setLocation] = useState({
        latitude: '',
        longitude: ''
    });
    const handleGetLocation = (e:any) => {
        e.preventDefault();
        navigator.geolocation.getCurrentPosition((position) => {            
            setLocation({
                latitude: position.coords.latitude.toString(),
                longitude: position.coords.longitude.toString()
            });
        })
    }

  return (
    <>
      <NavLink to="/">
        <button>Go Back</button>
      </NavLink>

      <div className={style.parent}>
        <div className={style.formDiv}>
          <form>
            <div className={style.childDiv}>
              <label htmlFor="latitude">Latitude</label>
              <input type="text" name="latitude" id="latitude" value={location.latitude}
              onChange={(e) => setLocation((prev) => ({...prev, latitude: e.target.value}))}/>
            </div>
            <div className={style.childDiv}>
              <label htmlFor="longitude">Longitude</label>
              <input type="text" name="longitude" value={location.longitude}
              onChange={(e) => setLocation((prev) => ({...prev, longitude: e.target.value}))}/>
            </div>

            <button className={style.getLocation} onClick={(e) => handleGetLocation(e)}>
            Get Current Location
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default GeoLocation;
