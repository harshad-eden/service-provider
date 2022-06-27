import { Timeline } from 'antd';
import styles from './index.module.css';
import { BsChevronDown } from 'react-icons/bs';

const App = () => {
  let step = 1;

  return (
    <div className={styles.stepContainer}>
      <div className={styles.progressItem}>
        <div className={styles.stepDotRing}>
          <div className={styles.stepDot} />
        </div>
        <div style={{ backgroundColor: '#3eb919' }} className={styles.progressLine} />
      </div>

      <div className={styles.progressItem}>
        <div className={styles.stepDotRing}>
          <div className={styles.stepDot} />
        </div>
        <div
          style={step === 2 ? { backgroundColor: '#3eb919' } : { backgroundColor: '#e6eae5' }}
          className={styles.progressLine}
        />
      </div>

      <div className={styles.progressItem}>
        <div className={styles.stepDotRing}>
          <div className={styles.stepDotActive} />
        </div>
        {/* <div style={{ backgroundColor: '#3eb919' }} className={styles.progressLine} /> */}
      </div>
    </div>
  );
};

export default App;
