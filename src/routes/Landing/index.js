import { Route } from 'react-router-dom';
import React from 'react';
import Header from '../../components/Header';
import UserList from './containers/UserList';
import styles from './index.module.css';

function LandingDetail() {
  const {
    container,
    header,
    userList,
  } = styles;

  return (
    <section className={container}>
      <Header className={header} />
      <UserList className={userList} />
    </section>
  );
}

export default () => (<Route exact path="/" component={LandingDetail} />);
