import { connect } from 'react-redux';
import { updateComments } from '../../../actions';
import { POSTS } from '../../../constants/REDUCER_TYPES';
import CommentArea from '../components/CommentArea';

const mapStateToProps = state => ({
  comments: state[POSTS].comments,
});

const mapDispatchToProps = { updateComments };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentArea);
