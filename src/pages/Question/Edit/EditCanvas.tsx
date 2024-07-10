import React, { FC } from 'react';
import styles from './editCanvas.module.scss';
import QuestionTitle from '../../../components/QuestionTitle/component';
import QuestionInput from '../../../components/QustionInput/component';

const EditCanvas: FC = () => {
  return (
    <div className={styles.canvas}>
      <div className={styles['component-wrapper']}>
        <div className={styles.component}>
          <QuestionTitle />
        </div>
      </div>
      <div className={styles['component-wrapper']}>
        <div className={styles.component}>
          <QuestionInput />
        </div>
      </div>
    </div>
  );
};

export default EditCanvas;
