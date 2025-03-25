import { FC } from 'react';

interface IModalDescriptionItemProps {
  styles: { [key: string]: string };
  title: string;
  modalItemObject: { [key: string]: string | { [key: string]: string } };
}

const renderValue = (
  value: string | { [key: string]: string },
  styles: { [key: string]: string }
) => {
  if (typeof value === 'object' && value !== null) {
    return renderNestedObject(value, styles);
  } else {
    return <p className={styles.description}>{value}</p>;
  }
};

const renderNestedObject = (
  nestedObject: { [key: string]: string },
  styles: { [key: string]: string }
) => {
  return (
    <div>
      {Object.entries(nestedObject).map(([key, value]) => {
        return (
          <div className={styles.subDescrItemBlock} key={key}>
            <h4 className={styles.subDescrItemTitle}>{key}: </h4>
            {renderValue(value, styles)}
          </div>
        );
      })}
    </div>
  );
};

const ModalDescriptionItem: FC<IModalDescriptionItemProps> = ({
  modalItemObject,
  title,
  styles,
}) => {
  return (
    <div className={styles.modalItem}>
      <h2 className={styles.title}>{title}</h2>
      {modalItemObject &&
        Object.entries(modalItemObject).map(([key, value]) => (
          <div className={styles.descrItemWrapper} key={key}>
            <h3 className={styles.h3Title}>{key}:</h3>
            {renderValue(value, styles)}
          </div>
        ))}
    </div>
  );
};

export default ModalDescriptionItem;
