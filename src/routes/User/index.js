import { Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { USERS_ROUTE } from '../../constants/ROUTE_TYPES';
import styles from './index.module.css';
import Header from '../../components/Header';
import SideBar from './containers/SideBar';
import { updateUser as updateUserAction } from '../../actions';
import { getUserById } from '../../apis';
import { USERS } from '../../constants/REDUCER_TYPES';
import REDUCERS_TYPE_CHECKS from '../../constants/REDUCERS_TYPE_CHECKS';
import Todos from '../Todos';
import Albums from '../Albums';
import Posts from '../Posts';

function UserDetail(props) {
  const {
    match,
    user,
    updateUser,
  } = props;
  const {
    container,
    wrapper,
    header,
    sideBar,
  } = styles;

  // indicate should load user or not
  const [isLoading, setIsLoading] = useState(user.id !== Number.parseInt(match.params.userId, 10));

  // get user data
  useEffect(async () => {
    const getData = async () => {
      const response = await getUserById(match.params.userId);
      updateUser(response.data);
    };
    await getData();
    return () => { getData.cancel(); };
  }, []);

  // when get data succeed. render UI
  useEffect(() => {
    if (isLoading && user.id === Number.parseInt(match.params.userId, 10)) {
      setIsLoading(false);
    }
  }, [user]);

  return (
    <section className={container}>
      <Header className={header} />
      {
        isLoading ? null
          : (
            <div className={wrapper}>
              <SideBar className={sideBar} />
              <Todos />
              <Albums />
              <Posts />
            </div>
          )
      }
    </section>
  );
}

UserDetail.propTypes = {
  user: PropTypes.oneOfType([
    REDUCERS_TYPE_CHECKS[USERS].user.isRequired,
    PropTypes.object,
  ]).isRequired,
  updateUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    user: state[USERS].user,
  }
);

const mapDispatchToProps = { updateUser: updateUserAction };

const Router = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserDetail);

export default () => (
  <Route
    path={`/${USERS_ROUTE}/:userId`}
    component={Router}
  />
);
