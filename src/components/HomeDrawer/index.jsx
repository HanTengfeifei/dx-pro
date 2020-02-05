import React from 'react';
import { useAsync, useBoolean } from '@umijs/hooks';
import { Drawer, Button, Icon } from 'antd';
import Link from 'umi/link';
import styles from './index.less';

const HomeDrawer = ({ ...props }) => {
  const { state, toggle, setTrue, setFalse } = useBoolean(false);
  return (
    <div>
      <Button type="primary" className={styles.toggleButton} onClick={() => toggle()}>
        <Icon type={state ? 'unmenu-fold' : 'menu-fold'} />
      </Button>
      <Drawer
        title={<div>{''}</div>}
        placement="right"
        closable={true}
        onClose={setFalse}
        visible={state}
        // maskStyle={{ backgroundColor: '#444'}}
        drawerStyle={{ backgroundColor: '#444' }}
        headerStyle={{ backgroundColor: '#444' }}
      >
        <p>
          <Link to="/">首页</Link>
        </p>
        <p>
          <Link to="/">我的矿机</Link>
        </p>
        <div className={styles.bottomBlock}>
          <Button ghost style={{ minWidth: '100px' }}>
            登录
          </Button>
          <Button ghost style={{ marginTop: '20px', minWidth: '100px' }}>
            注册
          </Button>
        </div>
      </Drawer>
    </div>
  );
};
export default HomeDrawer;
