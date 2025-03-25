import React, { FC } from 'react';
import styles from './ModalContactDot.module.scss';

interface IModalContactDot {
  Phone: string;
  Email: string;
  Fax: string;
  Hours: string;
  Link: string;
}

interface IModalContactDotProps {
  contactInformation: IModalContactDot;
  state: string;
}

const ModalContactDot: FC<IModalContactDotProps> = ({
  contactInformation,
  state,
}) => {
  return (
    <div className={styles.dotWrapper}>
      <h2 className={styles.title}>{state} DOT</h2>
      <ul>
        <li className={styles.dotItem}>
          <span>Phone</span>

          <a href={`tel:${contactInformation.Phone}`}>
            {contactInformation.Phone}
          </a>
        </li>
        <li className={styles.dotItem}>
          <span> Email</span>
          {contactInformation.Email !== 'N/A' ? (
            <a href={`mailto:${contactInformation.Email}`}>
              {contactInformation.Email}
            </a>
          ) : (
            <span>{contactInformation.Email}</span>
          )}
        </li>
        <li className={styles.dotItem}>
          <span>Fax</span>

          {contactInformation.Fax}
        </li>
        <li className={styles.dotItem}>
          <span>Hours</span>

          {contactInformation.Hours}
        </li>
        <li className={styles.dotItem}>
          <span>Link</span>

          <a
            className={styles.link}
            target="_blank"
            href={contactInformation.Link}
          >
            Permit Page
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ModalContactDot;
