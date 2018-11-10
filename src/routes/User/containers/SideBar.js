import { connect } from 'react-redux';
import { USERS } from '../../../constants/REDUCER_TYPES';
import SideBar from '../components/SideBar';

const mapStateToProps = state => (
  {
    user: state[USERS].user,
  }
);

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBar);
