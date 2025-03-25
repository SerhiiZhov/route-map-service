'use client';
import { FC, useRef, useState } from 'react';
import StateInfoBox from '../state-info-box/StateInfoBox';
import SvgMap from '../svg-map/SvgMap';
import styles from './MapSection.module.scss';
import StateNameBlock from '../state-name-block/StateNameBlock';
import Disclamer from '../disclamer/Disclamer';
import Modal from '../modal/Modal';
import { IModalInfo, ISmallInfoBox } from '@/app/interfaces/interfaces';

const MapSection: FC = () => {
  const [smallInfoBox, setSmallInfoBox] = useState<ISmallInfoBox | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [stateName, setStateName] = useState<string | null>(null);
  const [stateModalInfo, setStateModalInfo] = useState<IModalInfo | null>(null);

  const handleMouseEnter = (info: ISmallInfoBox) => {
    setSmallInfoBox(info);
  };

  const handleMouseLeave = () => {
    setSmallInfoBox(null);
  };

  const infoBoxRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const infoBox = infoBoxRef.current;
    const infoWidth = infoBox?.offsetWidth || 0;
    const infoHeight = infoBox?.offsetHeight || 0;

    const x = e.pageX - infoWidth / 2;
    const y = e.pageY - infoHeight - 20;

    setPosition({ x, y });
  };

  return (
    <div className={styles.mapSection}>
      <StateNameBlock stateName={stateModalInfo && stateName} />
      {smallInfoBox && (
        <StateInfoBox
          ref={infoBoxRef}
          position={position}
          info={smallInfoBox}
        />
      )}
      <div className={styles.mapWrapper}>
        <SvgMap
          setStateModalInfo={setStateModalInfo}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          handleMouseMove={handleMouseMove}
          setStateName={setStateName}
        />
      </div>
      <Disclamer />
      {stateModalInfo && (
        <Modal
          setStateModalInfo={setStateModalInfo}
          stateModalInfo={stateModalInfo}
        />
      )}
    </div>
  );
};

export default MapSection;
