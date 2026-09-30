import React, { useState, useEffect } from 'react';

export default function CCTVSurveillance() {
  const [cameras, setCameras] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cameraName, setCameraName] = useState('');
  const [location, setLocation] = useState('');
  const [streamUrl, setStreamUrl] = useState('');

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

  // Fetch CCTV cameras
  const fetchCameras = async () => {
    try {
      const res = await fetch(`${API_URL}/cctv`);
      const data = await res.json();
      setCameras(data);
    } catch (err) {
      console.error("Failed to load camera feeds:", err);
    }
  };

  useEffect(() => {
    fetchCameras();
  }, []);

  // Add new CCTV stream
  const handleConnectCamera = async (e) => {
    e.preventDefault();
    if (!streamUrl) return;

    try {
      const res = await fetch(`${API_URL}/cctv`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: cameraName, location, streamUrl })
      });

      if (res.ok) {
        setCameraName('');
        setLocation('');
        setStreamUrl('');
        setIsModalOpen(false);
        fetchCameras();
      }
    } catch (err) {
      console.error("Error connecting camera:", err);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>🎥 Live CCTV Monitoring Center</h2>
        <button 
          onClick={() => setIsModalOpen(true)}
          style={{ padding: '10px 18px', backgroundColor: '#16a34a', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          + Connect CCTV Stream
        </button>
      </div>

      {/* CCTV Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        {cameras.map((cam) => (
          <div key={cam.id} style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '12px', background: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <strong>{cam.name}</strong>
              <span style={{ color: '#16a34a', fontSize: '12px', fontWeight: 'bold' }}>● LIVE</span>
            </div>
            <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 10px 0' }}>📍 {cam.location}</p>

            {/* Video Player Feed */}
            <div style={{ width: '100%', height: '200px', backgroundColor: '#000', borderRadius: '6px', overflow: 'hidden' }}>
              <video 
                src={cam.streamUrl} 
                controls 
                autoPlay 
                loop 
                muted 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Connect CCTV Modal */}
      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '8px', width: '400px' }}>
            <h3>Connect New CCTV Stream</h3>
            <form onSubmit={handleConnectCamera} style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
              <input 
                type="text" 
                placeholder="Camera Name (e.g. Ward 4 Cam 2)" 
                value={cameraName} 
                onChange={(e) => setCameraName(e.target.value)}
                required
                style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              <input 
                type="text" 
                placeholder="Location / Zone" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)}
                required
                style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              <input 
                type="url" 
                placeholder="Stream / RTSP / MP4 Link" 
                value={streamUrl} 
                onChange={(e) => setStreamUrl(e.target.value)}
                required
                style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
                <button type="button" onClick={() => setIsModalOpen(false)} style={{ padding: '8px 14px', background: '#ccc', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
                <button type="submit" style={{ padding: '8px 14px', background: '#16a34a', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Connect Stream</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}