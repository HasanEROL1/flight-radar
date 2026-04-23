import { MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import "leaflet-rotatedmarker"
import { useSelector } from "react-redux";

import { getIcon } from './../utils/constant';
import { useDispatch } from "react-redux";
import { clearRoute, open } from "../redux/slices/detailSlice";



const Map = () => {
    const dispatch = useDispatch()
    const { flights } = useSelector((store) => store.flight)
    const { route } = useSelector((store) => store.detail)

    // useEffect(() => {
    //     const id = setInterval(() => dispatch(getFlights()), 5000)

    //         clearInterval(id)

    // }, [])



    return (
        <MapContainer
            center={[38.908216, 35.424321]} zoom={6} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {flights.map((flight) => (
                <Marker key={flight.id ? String(flight.id) : `${flight.code}-${flight.lat}-${flight.lng}`}
                    position={[flight.lat, flight.lng]} icon={getIcon(flight.deg)}
                >
                    <Popup>
                        <div className="popup">
                            <span>Kod: {flight.code}</span>
                            <button onClick={() => dispatch(open(flight.id))}>Detay</button>
                            {route.length > 0 && (<button onClick={() => dispatch(clearRoute())}>Rotayı Temizle</button>)}
                        </div>
                    </Popup>
                </Marker>
            ))}


            {route && <Polyline positions={route} />}
        </MapContainer>
    )
}

export default Map
