import React, {useEffect, useRef} from "react";
import mapboxgl from "mapbox-gl";

import styles from "./styles/index.module.css";
import '../../App.css';


const  Map = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1IjoidmxhZGlzbGF2c2hpcG92c2tvaSIsImEiOiJjbGI2Zzh6ZG4wMHRlM3Zud2FoajZlNjZmIn0.wNmAV9uJc9MzK41Z0VYYmw";
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [30.3056504, 59.9429126],
            zoom: 10
        });
    });

    return (
        <div className={styles.mapWrapper}>
            <div data-testid="map" className={styles.map} ref={mapContainer} />
        </div>
    )
}

export default Map