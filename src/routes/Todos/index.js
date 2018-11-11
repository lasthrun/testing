import { Route } from 'react-router-dom';
import React from 'react';
import styles from './index.module.css';

function TodosDetail() {
  const {
    container,
  } = styles;

  return (
    <section className={container}>
    </section>
  );
}

export default () => (<Route exact path="/user/:userId/todos" component={TodosDetail} />);
