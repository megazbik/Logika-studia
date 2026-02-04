
export type LayerType = 'turquoise' | 'yellow' | 'purple' | 'green' | 'cables';

export interface DeviceInfo {
  id: string;
  name: string;
  model: string;
  function: string;
  layer: LayerType;
  portsDiagram?: string;
  connectionLogic?: string;
  cableInfo?: {
    from: string;
    to: string;
    portFrom: string;
    portTo: string;
  };
}

export interface LayerState {
  turquoise: boolean;
  yellow: boolean;
  purple: boolean;
  green: boolean;
  cables: boolean;
}
