import FocusTrap from 'focus-trap-react';
import styles from '@styles/modules/Modal.module.css';

interface modalPropsType {
  children: JSX.Element;
  onModalClose: () => void;
}

const Modal = ({ children, onModalClose }: modalPropsType) => {
  return (
    <FocusTrap>
      <div className={styles.modalContainer} role='dialog' aria-modal='true'>
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <button
              className={styles.crossBtn}
              title='fermer la fenêtre'
              onClick={onModalClose}
            >
              X
            </button>
          </div>
          <div className={styles.modalBody}>{children}</div>
          <div className={styles.modalFooter}>
            {' '}
            <button
              className={styles.closeBtn}
              title='fermer la fenêtre'
              onClick={onModalClose}
            >
              Fermer la fenêtre
            </button>
          </div>
        </div>
      </div>
    </FocusTrap>
  );
};

export default Modal;
