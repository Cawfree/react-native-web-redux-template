import { connect } from 'react-redux';

import Dashboard from './../components/Dashboard';

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {
    withRef: false,
  },
)(Dashboard);

export default DashboardContainer;
