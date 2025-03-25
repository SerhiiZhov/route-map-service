import { FC, useEffect, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';
import { IModalInfo, MapFunctions } from '@/app/interfaces/interfaces';
import ModalDescriptionBlock from '../modal-description-block/ModalDescriptionBlock';
import ModalContactDot from '../modal-contact-dot/ModalContactDot';

interface IModal {
  stateModalInfo: IModalInfo;
  setStateModalInfo: MapFunctions['setStateModalInfo'];
}

const Modal: FC<IModal> = ({ stateModalInfo, setStateModalInfo }) => {
  const [isClosing, setIsClosing] = useState(false);

  const closeModal = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setStateModalInfo(null);
    }, 500);
  }, [setStateModalInfo]);

  useEffect(() => {
    if (!stateModalInfo) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stateModalInfo, closeModal]);

  if (!stateModalInfo && !isClosing) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      onClick={closeModal}
      className={`${styles.modalOverlay} ${isClosing ? styles.fadeOut : styles.fadeIn} open`}
    >
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button
          className={styles.closeModalBtn}
          onClick={closeModal}
          aria-label="Close"
        >
          Close
        </button>
        <div className={styles.wrapper}>
          <ModalDescriptionBlock stateModalInfo={stateModalInfo} />
          <ModalContactDot
            state={stateModalInfo.state}
            contactInformation={stateModalInfo.dot}
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
