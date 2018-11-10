import { Route } from 'react-router-dom';
import React from 'react';
import Header from '../../components/Header';
import UserList from './containers/UserList';
import styles from './index.module.css';

function LandingDetail() {
  return (
    <section className={styles.container}>
      <Header className={styles.header} />
      <UserList className={styles.userList} />
    </section>
  );
}

export default () => (<Route path="/" component={LandingDetail} />);
