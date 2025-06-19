'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

const customIcon = new L.Icon({
  iconUrl: '/map/marker-icon.png',
  iconRetinaUrl: '/map/marker-icon-2x.png',
  shadowUrl: '/map/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const MapView = ({ programs, setSelectedProgram }) => {
  useEffect(() => {
    const mapElem = document.querySelector('.leaflet-container');
    if (mapElem) mapElem.style.height = '100%';
  }, []);

  return (
    <MapContainer
      center={[26.8467, 80.9462]}
      zoom={12}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%', zIndex: 0 }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {programs.map((program) => (
        <Marker
          key={program.id}
          position={[program.lat, program.lng]}
          icon={customIcon}
          eventHandlers={{ click: () => setSelectedProgram(program) }}
        >
          <Popup>
            <div style={{ minWidth: '160px' }}>
              <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: '#4F46E5', marginBottom: '4px' }}>
                {program.name}
              </h2>
              <p style={{ fontSize: '12px', color: '#4B5563' }}>{program.location}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
