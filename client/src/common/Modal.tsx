import { Dialog } from '@reach/dialog';
import CloseIcon from 'mdi-react/CloseIcon';
import React from 'react';
import styles from './Modal.module.css';
import IconButton from './IconButton';

export interface Props extends React.HTMLAttributes<HTMLElement> {
  title: string;
  visible?: boolean;
  onClose?: () => void;
  width: string | number;
  initialFocusRef?: React.RefObject<any>;
}

function Modal({
  title,
  visible,
  onClose,
  width,
  initialFocusRef,
  children,
}: Props) {
  if (visible) {
    return (
      <Dialog
        aria-label={title}
        onDismiss={onClose}
        className={`${styles.Dialog}`}
        style={{
          width,
        }}
        initialFocusRef={initialFocusRef}
      >   
        <div className={`${styles.titleWrapper} bg-gray-400`}>
          <span className={styles.title}>{title}</span>
          {onClose && (
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          )}
        </div>
        <div className={`${styles.dialogBody} bg-gray-400 dark:bg-blue-800`}>{children}</div>
      </Dialog>
    );
  }
  return null;
}

export default Modal;
