import { connect } from 'react-redux';
import { updateUsers } from '../../../actions';
import { USERS } from '../../../constants/REDUCER_TYPES';
import UserList from '../components/UserList';

const mapStateToProps = state => ({
  users: state[USERS].users,
});

const mapDispatchToProps = { updateUsers };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList);
