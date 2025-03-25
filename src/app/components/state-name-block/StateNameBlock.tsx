import { FC } from 'react';
import styles from './StateNameBlock.module.scss';

interface IStateNameBlock {
  stateName: string | null;
}

const StateNameBlock: FC<IStateNameBlock> = ({ stateName }) => {
  return (
    <div className={styles.stateNameWrapper}>
      <div className={styles.stateNameBlock}>
        {stateName || 'States Dimensions Before Escorts'}
      </div>
    </div>
  );
};

export default StateNameBlock;
