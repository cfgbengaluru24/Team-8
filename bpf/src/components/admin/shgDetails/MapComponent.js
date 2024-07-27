import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Ensure that leaflet's default icon is used
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const MapComponent = ({ locations, locationCoordinates }) => {
  const mapCenter = locations.length > 0 ? locationCoordinates[locations[0]] : [40.7128, -74.0060]; // Default center if no location

  return (
    <div className="map-container mt-4">
      <MapContainer center={mapCenter} zoom={10} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {Object.keys(locationCoordinates).map((locationName, index) => {
          const position = locationCoordinates[locationName];
          return position ? (
            <Marker key={index} position={position}>
              <Popup>
                <strong>{locationName}</strong>
              </Popup>
            </Marker>
          ) : null;
        })}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
