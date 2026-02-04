import { DeviceInfo } from './types';

export const COLORS = {
  turquoise: '#38bdf8', // Sky 400
  yellow: '#facc15',    // Yellow 400
  purple: '#a855f7',    // Purple 500
  green: '#4ade80',     // Green 400
  slate: '#64748b',
  bg: '#0f172a'
};

/** 
 * Link do grafiki Coolcam 300X z Google Drive.
 * Używamy bezpośredniego serwera treści (lh3), aby uniknąć blokowania przez Safari ITP.
 * Nowy plik ID: 1ETXt8yCydWZRDeKO5iEJEuHPR1u1ySgi
 */
const COOLCAM_DRIVE_IMAGE = "https://lh3.googleusercontent.com/d/1ETXt8yCydWZRDeKO5iEJEuHPR1u1ySgi";

export const DEVICES: Record<string, DeviceInfo> = {
  // VIDEO LAYER (Yellow)
  'cam_1': {
    id: 'cam_1',
    name: 'Kamera Panasonic 1',
    model: 'Panasonic HC-X2000',
    function: 'Główna kamera wideo na statywie.',
    layer: 'yellow',
    portsDiagram: 'https://placehold.co/400x200?text=HDMI+Out,+XLR+In,+Power',
    connectionLogic: 'Podłączona przez HDMI do głównego miksera ATEM Mini Extreme ISO.'
  },
  'cam_2': {
    id: 'cam_2',
    name: 'Kamera Panasonic 2',
    model: 'Panasonic HC-X2000',
    function: 'Kamera boczna na statywie.',
    layer: 'yellow',
    portsDiagram: 'https://placehold.co/400x200?text=HDMI+Out,+XLR+In,+Power',
    connectionLogic: 'Podłączona przez HDMI do głównego miksera ATEM Mini Extreme ISO.'
  },
  'atem_extreme': {
    id: 'atem_extreme',
    name: 'Główny Mikser Video',
    model: 'Blackmagic Design ATEM Mini Extreme ISO',
    function: 'Zaawansowany mikser video z 8 wejściami HDMI i nagrywaniem ISO.',
    layer: 'yellow',
    portsDiagram: 'https://placehold.co/400x200?text=8x+HDMI+In,+2x+HDMI+Out,+2x+USB-C',
    connectionLogic: 'Główne centrum przełączania sygnałów wideo w studiu.'
  },

  // LIGHTING LAYER (Purple)
  'light_p1': {
    id: 'light_p1',
    name: 'Lampa Lishuai 1',
    model: 'Lishuai P-1380ASVL',
    function: 'Oświetlenie panelowe (Softlight).',
    layer: 'purple',
    portsDiagram: 'https://placehold.co/400x200?text=DMX+In,+DMX+Out,+Power+V-Mount',
    connectionLogic: 'Łączenie szeregowe (Daisy-chain) DMX. Podpięta do kanału 1 na konsoli Ibiza.'
  },
  'light_p2': {
    id: 'light_p2',
    name: 'Lampa Lishuai 2',
    model: 'Lishuai P-1380ASVL',
    function: 'Oświetlenie panelowe (Softlight).',
    layer: 'purple',
    portsDiagram: 'https://placehold.co/400x200?text=DMX+In,+DMX+Out,+Power+V-Mount',
    connectionLogic: 'Łączenie szeregowe (Daisy-chain) DMX. Podpięta do kanału 2 na konsoli Ibiza.'
  },
  'light_p3': {
    id: 'light_p3',
    name: 'Lampa Lishuai 3',
    model: 'Lishuai P-1380ASVL',
    function: 'Oświetlenie panelowe (Softlight).',
    layer: 'purple',
    portsDiagram: 'https://placehold.co/400x200?text=DMX+In,+DMX+Out,+Power+V-Mount',
    connectionLogic: 'Łączenie szeregowe (Daisy-chain) DMX. Podpięta do kanału 3 na konsoli Ibiza.'
  },
  'light_p4': {
    id: 'light_p4',
    name: 'Lampa Lishuai 4',
    model: 'Lishuai P-1380ASVL',
    function: 'Oświetlenie panelowe (Softlight).',
    layer: 'purple',
    portsDiagram: 'https://placehold.co/400x200?text=DMX+In,+DMX+Out,+Power+V-Mount',
    connectionLogic: 'Łączenie szeregowe (Daisy-chain) DMX. Podpięta do kanału 4 na konsoli Ibiza.'
  },
  'light_c1': {
    id: 'light_c1',
    name: 'Lampa Coolcam 1',
    model: 'Coolcam 300X',
    function: 'Punktowe źródło światła z regulacją natężenia i barwy.',
    layer: 'purple',
    portsDiagram: COOLCAM_DRIVE_IMAGE,
    connectionLogic: 'Lampa posiada włącznik główny oraz port DC48V. Sterowanie odbywa się przez pokrętła (nawigacja po menu oraz poziom natężenia/barwy) lub przez DMX IN (konsola Ibiza). Port DMX OUT służy do łączenia z innymi lampami (daisy chaining).'
  },
  'light_c2': {
    id: 'light_c2',
    name: 'Lampa Coolcam 2',
    model: 'Coolcam 300X',
    function: 'Punktowe źródło światła z regulacją natężenia i barwy.',
    layer: 'purple',
    portsDiagram: COOLCAM_DRIVE_IMAGE,
    connectionLogic: 'Lampa posiada włącznik główny oraz port DC48V. Sterowanie odbywa się przez pokrętła (nawigacja po menu oraz poziom natężenia/barwy) lub przez DMX IN (konsola Ibiza). Port DMX OUT służy do łączenia z innymi lampami (daisy chaining).'
  },
  'dmx_console': {
    id: 'dmx_console',
    name: 'Konsola DMX',
    model: 'Ibiza LC12DMX',
    function: 'Kontroler oświetlenia studia.',
    layer: 'purple',
    portsDiagram: 'https://placehold.co/400x200?text=DMX+Out+(3-pin+XLR)',
    connectionLogic: 'Master DMX wysyłający sygnał do pierwszej lampy w pętli.'
  },

  // AUDIO LAYER (Green)
  'mic_1': {
    id: 'mic_1',
    name: 'Mikrofon 1',
    model: 'Audio-Technica AT2020',
    function: 'Mikrofon pojemnościowy dla lewego gościa.',
    layer: 'green',
    portsDiagram: 'https://placehold.co/400x200?text=XLR+Male',
    connectionLogic: 'Podłączony kablem XLR do wejścia MIC 1 w mikserze DNA.'
  },
  'mic_2': {
    id: 'mic_2',
    name: 'Mikrofon 2',
    model: 'Audio-Technica AT2020',
    function: 'Mikrofon pojemnościowy dla prawego gościa.',
    layer: 'green',
    portsDiagram: 'https://placehold.co/400x200?text=XLR+Male',
    connectionLogic: 'Podłączony kablem XLR do wejścia MIC 2 w mikserze DNA.'
  },
  'mic_3': {
    id: 'mic_3',
    name: 'Mikrofon 3',
    model: 'Audio-Technica AT2020',
    function: 'Mikrofon pojemnościowy dla prowadzącego.',
    layer: 'green',
    portsDiagram: 'https://placehold.co/400x200?text=XLR+Male',
    connectionLogic: 'Podłączony kablem XLR do wejścia MIC 3 w mikserze DNA.'
  },
  'audio_mixer': {
    id: 'audio_mixer',
    name: 'Mikser Audio',
    model: 'DNA EF-MIX',
    function: 'Konsola miksująca audio i efekty.',
    layer: 'green',
    portsDiagram: 'https://placehold.co/400x200?text=XLR+Inputs,+USB+Out',
    connectionLogic: 'Sumuje sygnały z mikrofonów i wysyła USB do laptopa.'
  },

  // CABLES
  'cable_cam1': {
    id: 'cable_cam1',
    name: 'Kabel HDMI Cam 1',
    model: 'High Speed HDMI 2.0',
    function: 'Transmisja wideo 4K.',
    layer: 'cables',
    cableInfo: { from: 'Kamera Panasonic 1', to: 'ATEM Extreme', portFrom: 'HDMI Out', portTo: 'Input 1' }
  },
  'cable_mic1': {
    id: 'cable_mic1',
    name: 'Kabel XLR Mic 1',
    model: 'XLR-XLR (Balanced)',
    function: 'Transmisja sygnału mikrofonowego do miksera.',
    layer: 'cables',
    cableInfo: { from: 'Mikrofon 1 (AT2020)', to: 'Mikser DNA', portFrom: 'XLR Out', portTo: 'MIC 1 In' }
  },
  'cable_mic2': {
    id: 'cable_mic2',
    name: 'Kabel XLR Mic 2',
    model: 'XLR-XLR (Balanced)',
    function: 'Transmisja sygnału mikrofonowego do miksera.',
    layer: 'cables',
    cableInfo: { from: 'Mikrofon 2 (AT2020)', to: 'Mikser DNA', portFrom: 'XLR Out', portTo: 'MIC 2 In' }
  },
  'cable_mic3': {
    id: 'cable_mic3',
    name: 'Kabel XLR Mic 3',
    model: 'XLR-XLR (Balanced)',
    function: 'Transmisja sygnału mikrofonowego do miksera.',
    layer: 'cables',
    cableInfo: { from: 'Mikrofon 3 (AT2020)', to: 'Mikser DNA', portFrom: 'XLR Out', portTo: 'MIC 3 In' }
  },
  'cable_dmx': {
    id: 'cable_dmx',
    name: 'Kabel DMX Loop',
    model: 'XLR 110 Ohm',
    function: 'Szeregowe połączenie sterowania lamp.',
    layer: 'cables',
    cableInfo: { from: 'Ibiza LC12DMX', to: 'Lishuai P-1380ASVL', portFrom: 'DMX Master', portTo: 'DMX In' }
  }
};