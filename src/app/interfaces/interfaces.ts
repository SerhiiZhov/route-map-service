export type MapFunctions = {
  handleMouseEnter: (info: ISmallInfoBox) => void;
  handleMouseLeave: () => void;
  handleMouseMove: (e: React.MouseEvent<SVGSVGElement>) => void;
  setStateName: (newValue: string) => void;
  setStateModalInfo: (modalInfo: IModalInfo | null) => void;
};

export interface State {
  id: string;
  title: string;
  d: string;
  x: string;
  y: string;
}

export interface ISmallInfoBox {
  state: string;
  width: string;
  height: string;
  length: string;
}
export interface IModalInfo {
  state: string;
  width: string;
  height: string;
  length: string;
  operTime: string;
  legalDimension: {
    Length: string;
    Width: string;
    Height: string;
    Overhang: string;
    Weight: {
      Gross: string;
      Single: string;
      Tandem: string;
      Tridem: string;
    };
    Notes: string;
  };
  weightLimits: {
    Gross: string;
    Single: string;
    Tandem: string;
    Tridem: string;
    Notes: string;
  };
  escortConditions: {
    Length: string;
    Width: string;
    Height: string;
    Notes: string;
  };
  dot: {
    Phone: string;
    Email: string;
    Fax: string;
    Hours: string;
    Link: string;
  };
}
