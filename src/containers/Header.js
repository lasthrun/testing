import { connect } from 'react-redux';
import { unSelectUser } from '../actions';
import { USERS } from '../constants/REDUCER_TYPES';
import Header from '../components/Header';

const mapStateToProps = state => ({
  users: state[USERS],
});

const mapDispatchToProps = { unSelectUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
