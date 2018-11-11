import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import connect from 'react-redux/es/connect/connect';
import { Route } from 'react-router-dom';
import { updateTodos as updateTodosAction } from '../../actions';
import { getTodosByUserId } from '../../apis';
import Checkbox from '../../components/CheckBox';
import { TODOS } from '../../constants/REDUCER_TYPES';
import REDUCERS_TYPE_CHECKS from '../../constants/REDUCERS_TYPE_CHECKS';
import { TODOS_ROUTE, USERS_ROUTE } from '../../constants/ROUTE_TYPES';
import styles from './index.module.css';

function TodosDetail(props) {
  const {
    match, updateTodos, todos,
  } = props;
  const {
    container,
  } = styles;

  // get todos data
  const [isLoading, setIsLoading] = useState(true);
  useEffect(async () => {
    const getData = async () => {
      const response = await getTodosByUserId(match.params.userId);
      updateTodos(response.data);
      setIsLoading(false);
    };
    await getData();
    return () => { getData.cancel(); };
  }, []);

  // get checkboxOptions
  const [checkboxOptions, setCheckboxOptions] = useState([]);
  useEffect(() => {
    setCheckboxOptions(Object.keys(todos).map(todoKey => ({
      key: todoKey,
      title: todos[todoKey].title,
      isCompleted: todos[todoKey].completed,
    })));
  }, [todos]);

  return (
    <section className={container}>
      {isLoading ? null : checkboxOptions.map(option => (
        <Checkbox
          key={option.key}
          onCheck={() => {}}
          title={option.title}
          isCompleted={option.isCompleted}
        />
      ))}
    </section>
  );
}

TodosDetail.propTypes = {
  todos: PropTypes.oneOfType([
    REDUCERS_TYPE_CHECKS[TODOS].todos.isRequired,
    PropTypes.object,
  ]).isRequired,
  updateTodos: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    todos: state[TODOS].todos,
  }
);

const mapDispatchToProps = { updateTodos: updateTodosAction };

const Router = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodosDetail);

export default () => (
  <Route
    exact
    path={`/${USERS_ROUTE}/:userId/${TODOS_ROUTE}`}
    component={Router}
  />
);
