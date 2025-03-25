import stateСharacteristics, { stateInfoData } from '@/app/Utils/data';
import StateItem from '../state-item/StateItem';
import { FC } from 'react';
import { MapFunctions } from '@/app/interfaces/interfaces';
import styles from './SvgMap.module.scss';

const SvgMap: FC<MapFunctions> = ({
  handleMouseMove,
  handleMouseEnter,
  handleMouseLeave,
  setStateName,
  setStateModalInfo,
}) => {
  return (
    <svg
      className={styles.svgMap}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="us-map"
      preserveAspectRatio="xMinYMin meet"
      viewBox="174 100 959 593"
      onMouseMove={handleMouseMove}
    >
      <g id="g5">
        {stateСharacteristics.map((state, index) => (
          <StateItem
            key={state.id}
            modalInfo={stateInfoData[index]}
            stateInfo={state}
            setStateName={setStateName}
            setStateModalInfo={setStateModalInfo}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        ))}
      </g>
    </svg>
  );
};

export default SvgMap;
