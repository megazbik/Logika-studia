import React, { useState, useCallback } from 'react';
import StudioMap from './components/StudioMap';
import LayerControls from './components/LayerControls';
import DeviceInfoPanel from './components/DeviceInfoPanel';
import { LayerState, DeviceInfo } from './types';
import { DEVICES } from './constants';

const App: React.FC = () => {
  const [layers, setLayers] = useState<LayerState>({
    turquoise: true,
    yellow: true,
    purple: true,
    green: true,
    cables: false
  });

  const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(null);

  const toggleLayer = useCallback((layer: keyof LayerState) => {
    if (layer === 'turquoise') return; // Static layer
    setLayers(prev => ({ ...prev, [layer]: !prev[layer] }));
  }, []);

  const handleDeviceClick = useCallback((id: string) => {
    setSelectedDeviceId(id);
  }, []);

  const selectedDevice = selectedDeviceId ? DEVICES[selectedDeviceId] : null;

  return (
    <div className="flex h-screen w-screen overflow-hidden blueprint-grid">
      {/* Sidebar Controls */}
      <LayerControls 
        layers={layers} 
        onToggle={toggleLayer} 
      />

      {/* Main Map Area */}
      <div className="flex-grow relative overflow-hidden flex items-center justify-center">
        <div className="w-full h-full">
           <StudioMap 
            layers={layers} 
            onDeviceClick={handleDeviceClick} 
            selectedDeviceId={selectedDeviceId}
          />
        </div>
      </div>

      {/* Info Panel */}
      {selectedDevice && (
        <DeviceInfoPanel 
          device={selectedDevice} 
          onClose={() => setSelectedDeviceId(null)} 
        />
      )}

      {/* Header UI Overlay */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 px-8 py-3 rounded-full flex flex-col items-center">
          <h1 className="text-xl font-bold tracking-widest text-sky-400 uppercase">Interactive Studio Map</h1>
          <span className="text-[10px] text-slate-500 uppercase font-medium tracking-widest">Engineering Mode v2.5</span>
        </div>
      </div>
    </div>
  );
};

export default App;