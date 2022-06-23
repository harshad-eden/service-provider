import React from 'react';
import Main from '../../components/layout';
import styles from './index.module.css';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Table from './Table';
import TabMenu from './TabMenu';
import { Progress, Tooltip } from 'antd';

const Index = () => {
  return (
    <Main pageName="Dashboard">
      <div
        style={{
          width: '100%',
        }}
      >
        <div style={{ marginTop: 20, display: 'flex', gap: 20 }}>
          <div
            style={{
              width: '74%',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ width: '45%' }}>
                <Input
                  prefix={<SearchOutlined style={{ fontSize: 21, marginLeft: 10 }} />}
                  className="custom-ant-input"
                />
              </div>
              <div className={styles.addBox}>
                <img src="/icons/plusSign.webp" style={{ height: 40 }} alt="" />
                <div className={styles.whiteBox}>New Pre-Auth</div>
              </div>
            </div>
            <div style={{ marginTop: 30 }}>
              <div style={{ marginLeft: 30 }}>
                <TabMenu />
              </div>
              <Table />
            </div>
          </div>
          <div style={{ width: '26%', display: 'flex', flexDirection: 'column-reverse' }}>
            <div className={styles.table}></div>
          </div>
        </div>
        <div className={styles.progressContainer}>
          <div className={styles.progressBox}>
            <p className="mbFive">Claims</p>
            <div className={styles.progressBoxIn}>
              <div style={{ width: '50%' }}>
                <Tooltip title="60% approoved 40% denied">
                  <Progress
                    percent={100}
                    success={{
                      percent: 40,
                    }}
                    type="circle"
                  />
                </Tooltip>
              </div>
              <div style={{ width: '50%' }}>
                <p style={{ fontSize: 10 }}>
                  Lorem ipsum is simply dummy text of the printing of typesetting
                </p>
                {/* <p className={styles.greenPrecentage}>60%</p>
                <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                  <div className={styles.greenDot} />
                  <p style={{ marginBottom: 0 }}>Approved</p>
                </div> */}
              </div>
            </div>
          </div>
          <div className={styles.progressBox}>
            <p className="mbFive">Payments</p>
            <div className={styles.progressBoxIn}></div>
          </div>
          <div className={styles.progressBox}>
            <p className="mbFive">TAT</p>
            <div className={styles.progressBoxIn}></div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
