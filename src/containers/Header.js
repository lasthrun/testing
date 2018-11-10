import { connect } from 'react-redux';
import { USERS } from '../constants/REDUCER_TYPES';
import Header from '../components/Header';

const mapStateToProps = state => ({
  users: state[USERS],
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
