import { Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import Header from '../../components/Header';
import SideBar from './containers/SideBar';
import { updateUser as updateUserAction } from '../../actions';
import { getUserById } from '../../apis';
import { USERS } from '../../constants/REDUCER_TYPES';
import REDUCERS_TYPE_CHECKS from '../../constants/REDUCERS_TYPE_CHECKS';
import Todos from '../Todos';

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
  const [isLoading, setIsLoading] = useState(user.id !== Number.parseInt(match.params.userId, 10));
  // get user data
  useEffect(async () => {
    const response = await getUserById(match.params.userId);
    updateUser(response.data);
  }, []);
  // when get data succeed. render UI
  useEffect(() => {
    if (isLoading && user.id === Number.parseInt(match.params.userId, 10)) {
      setIsLoading(false);
    }
  }, [user, isLoading]);

  return (
    <section className={container}>
      <Header className={header} />
      {
        isLoading ? null
          : (
            <div className={wrapper}>
              <SideBar className={sideBar} />
              <Todos />
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

export default () => (
  <Route
    path="/user/:userId"
    component={connect(
      mapStateToProps,
      mapDispatchToProps,
    )(UserDetail)}
  />
);
