import * as React from 'react'
import { useRef, useEffect, useState } from 'react'
import './map.css'
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
mapboxgl.accessToken = 'pk.eyJ1IjoieHl0dWFuZyIsImEiOiJjbG5namZ2Z3AwcjBhMm1tc2Jtc2x4bjY2In0.YwMu97uQ8YEc9kfdHV18GQ'
const Map = () => {
    const mapContainer = useRef(null)
    const map = useRef(null)
    const [lng, setLng] = useState(-74)
    const [lat, setLat] = useState(40.7)
    const [zoom, setZoom] = useState(9)

    useEffect(() => {
        if (map.current) return
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        })
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4))
            setLat(map.current.getCenter().lat.toFixed(4))
            setZoom(map.current.getZoom().toFixed(2))
        })
        console.log('load success')
    })

    return (
        <div className='main-map-container'>
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="map-container" />
        </div>
    )
}

export default Map

