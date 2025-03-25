import { IModalInfo } from '@/app/interfaces/interfaces';
import ModalDescriptionItem from '../modal-description-item/ModalDescriptionItem';
import { FC } from 'react';
import styles from './ModalDescriptionBlock.module.scss';

interface IModalDescriptionBlockProps {
  stateModalInfo: IModalInfo;
}

const ModalDescriptionBlock: FC<IModalDescriptionBlockProps> = ({
  stateModalInfo,
}) => {
  return (
    <div className={styles.modalLeftBlock}>
      <div className={styles.modalItem}>
        <h2 className={styles.title}>Operating Time</h2>
        <p className={styles.description}>{stateModalInfo.operTime}</p>
      </div>
      <ModalDescriptionItem
        styles={styles}
        modalItemObject={stateModalInfo.legalDimension}
        title="Legal Dimensions"
      />
      <ModalDescriptionItem
        styles={styles}
        modalItemObject={stateModalInfo.weightLimits}
        title="Weight Limits"
      />
      <ModalDescriptionItem
        styles={styles}
        modalItemObject={stateModalInfo.escortConditions}
        title="Escort Conditions"
      />
    </div>
  );
};

export default ModalDescriptionBlock;
