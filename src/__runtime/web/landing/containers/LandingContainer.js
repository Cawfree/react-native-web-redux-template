import { connect } from 'react-redux';

import Landing from './../components/Landing';

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};

const LandingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {
    withRef: false,
  },
)(Landing);

export default LandingContainer;
