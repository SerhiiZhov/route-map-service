import { forwardRef } from 'react';
import styles from './StateInfoBox.module.scss';
import { ISmallInfoBox } from '@/app/interfaces/interfaces';

interface IStateInfoBox {
  position: { x: number; y: number };
  info: ISmallInfoBox;
}

const StateInfoBox = forwardRef<HTMLDivElement, IStateInfoBox>(
  ({ position, info }, ref) => {
    return (
      <div
        ref={ref}
        className={styles.infoBox}
        style={{ top: position.y, left: position.x }}
      >
        <div>
          {Object.entries(info).map(([key, value]) => (
            <p key={key}>{`${key}: ${value}`}</p>
          ))}
        </div>
      </div>
    );
  }
);

StateInfoBox.displayName = 'StateInfoBox';

export default StateInfoBox;
