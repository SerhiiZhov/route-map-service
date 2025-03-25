import { FC } from 'react';
import styles from './StateItem.module.scss';
import {
  IModalInfo,
  ISmallInfoBox,
  MapFunctions,
  State,
} from '@/app/interfaces/interfaces';

export interface IStateItemProps {
  setStateModalInfo: MapFunctions['setStateModalInfo'];
  handleMouseEnter: MapFunctions['handleMouseEnter'];
  handleMouseLeave: MapFunctions['handleMouseLeave'];
  setStateName: MapFunctions['setStateName'];
  stateInfo: State;
  modalInfo: IModalInfo;
}

const StateItem: FC<IStateItemProps> = ({
  setStateModalInfo,
  modalInfo,
  setStateName,
  stateInfo,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const info = {
    state: modalInfo.state,
    width: modalInfo.width,
    height: modalInfo.height,
    length: modalInfo.length,
  } as ISmallInfoBox;

  return (
    <a
      title={stateInfo.id}
      onClick={() => {
        setStateName(modalInfo.state);
        setStateModalInfo(modalInfo);
      }}
      onMouseEnter={() => handleMouseEnter(info)}
      onMouseLeave={handleMouseLeave}
    >
      <path
        id={stateInfo.id.toString()}
        fill="#D3D3D3"
        d={stateInfo.d}
        className={styles.map}
      />
      <text className={styles.text} x={stateInfo.x} y={stateInfo.y}>
        {stateInfo.title}
      </text>
    </a>
  );
};

export default StateItem;
