import { connect } from 'react-redux';
import { updatePhotos } from '../../../actions';
import { ALBUMS } from '../../../constants/REDUCER_TYPES';
import PhotoWindow from '../components/PhotoWindow';

const mapStateToProps = state => ({
  photos: state[ALBUMS].photos,
});

const mapDispatchToProps = { updatePhotos };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhotoWindow);
