//问卷编辑
import React, { FC } from 'react';
// import { useParams } from 'react-router-dom';
// import { getQuestionService } from '../../../services/question';
import useLoadQuestionData from '../../../Hooks/useLoadQuestionData';
import styles from './index.module.scss';
import EditCanvas from './EditCanvas';
const Edit: FC = () => {
  const { loading, data } = useLoadQuestionData();
  return (
    <div className={styles.container}>
      <div>header</div>
      <div className={styles['content-wrapper']}>
        <div className={styles.content}>
          <div className={styles.left}>left</div>
          <div className={styles.main}>
            <div className={styles['canvas-wrapper']}>
              <div style={{ height: '900px' }}>
                <EditCanvas />
              </div>
            </div>
          </div>
          <div className={styles.right}>right</div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
