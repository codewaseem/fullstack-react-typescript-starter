import * as React from "react";
import { SponsorViewList } from "../components";
import { connect } from "react-redux";
import { getSponsorsThunk } from "../../store/sponsors";

class SponsorViewContainer extends React.Component<any, any> {

  componentDidMount() {

  }
  render() {
    // tslint:disable-next-line:max-line-length
    return <SponsorViewList sponsors={this.props.sponsors} handleEditClick={this.props.handleEditClick} handleDeleteClick={this.props.handleDeleteClick} />;
  }
}

const mapStateToProps = (store) => {
  return {
    sponsors: store.sponsorsData.sponsorsList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSponsors: dispatch(getSponsorsThunk())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SponsorViewContainer); 