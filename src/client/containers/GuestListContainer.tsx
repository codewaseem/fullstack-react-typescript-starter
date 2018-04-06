import * as React from "react";
import { GuestViewList } from "../components";
import { connect } from "react-redux";
import { getGuestsThunk } from "../../store/guests";

class GuestViewContainer extends React.Component<any, any> {

  componentDidMount() {

  }
  render() {
    // tslint:disable-next-line:max-line-length
    return <GuestViewList guests={this.props.guests} handleEditClick={this.props.handleEditClick} handleDeleteClick={this.props.handleDeleteClick} />;
  }
}

const mapStateToProps = (store) => {
  return {
    guests: store.guestsData.guestsList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGuests: dispatch(getGuestsThunk())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GuestViewContainer); 