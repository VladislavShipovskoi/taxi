import React, {useEffect, useRef} from "react";
import mapboxgl from "mapbox-gl";
import styles from "./styles/index.module.css";
import {connect} from "react-redux";
import '../../App.css';


const  Map = (props) => {
    const { coordinates } = props

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

    useEffect(() => {
        if (map.current) {
            if (map.current.getLayer('route')) {
                map.current.removeLayer('route');
                map.current.removeSource('route');
            }

            if (coordinates.length) {
                map.current.addLayer({
                    id: "route",
                    type: "line",
                    source: {
                        type: "geojson",
                        data: {
                            type: "Feature",
                            properties: {},
                            geometry: {
                                type: "LineString",
                                coordinates,
                            },
                        },
                    },
                    layout: {
                        "line-join": "round",
                        "line-cap": "round",
                    },
                    paint: {
                        "line-color": "#278cb7",
                        "line-width": 8,
                    },
                });

                map.current.flyTo({
                    center: coordinates[0],
                    zoom: 15,
                });
            } else {
                map.current.flyTo({
                    center: [30.3056504, 59.9429126],
                    zoom: 10
                });
            }
        }

    }, [coordinates])

    return (
        <div className={styles.mapWrapper}>
            <div data-testid="map" className={styles.map} ref={mapContainer} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    coordinates: state.routes.coordinates,
})

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)