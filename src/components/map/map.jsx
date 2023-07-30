import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  Polyline,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./map.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestRoutes } from "../../api/api";
import { SEND_REQUEST } from "../../actions/action-get-route";
import img from "../../images/map-marker-line.svg";
const Map = () => {
  const dispatch = useDispatch();
  const { route, error } = useSelector((store) => ({
    route: store.route.router.coordinates,
    error: store.route.error,
  }));

  const selRoute = useSelector((store) => store.route.selRouter);
  const [line, setLine] = useState();
  const [center, setCenter] = useState();
  const icon = new L.Icon({
    iconUrl: img,
    iconSize: [20, 20],
    shadowSize: [50, 64],
    iconAnchor: [10, 20],
  });

  useEffect(() => {
    dispatch({ type: SEND_REQUEST, data: selRoute });
  }, [selRoute]);

  useEffect(() => {
    if (route) {
      setLine(route.map((el) => el.reverse()));
      setCenter(Math.ceil(route.length / 2));
    }
  }, [route]);
  if (line && !error) {
    return (
      <div className={styles["map-container"]}>
        <MapContainer
          className={styles["map"]}
          center={route[center]}
          bounds={line}
          scrollWheelZoom={true}
        >
          <RecenterAutomatically route={route[center]} bounds={line} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker draggable={false} icon={icon} position={selRoute[0]}></Marker>
          <Marker draggable={false} icon={icon} position={selRoute[1]}></Marker>
          <Marker draggable={false} icon={icon} position={selRoute[2]}></Marker>
          <Polyline pathOptions={{ color: "black" }} positions={line} />
        </MapContainer>
      </div>
    );
  }
  if (!line && error) {
    return <div>Маршрут не получен от сервера</div>;
  }
};

export default Map;

const RecenterAutomatically = ({ route, bounds }) => {
  const map = useMap();

  useEffect(() => {
    map.panTo(route);

    map.fitBounds(bounds);
  }, [route, bounds]);
  return null;
};
