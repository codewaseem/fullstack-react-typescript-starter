import * as React from "react";
import { EventViewList } from "../components";
import { connect } from "react-redux";
import { getEventsThunk } from "../../store/events";

class EventViewContainer extends React.Component<any, any> {

  componentDidMount() {

  }
  render() {
    // tslint:disable-next-line:max-line-length
    return <EventViewList events={this.props.events} handleEditClick={this.props.handleEditClick} handleDeleteClick={this.props.handleDeleteClick} />;
  }
}

const mapStateToProps = (store) => {
  return {
    events: store.eventsData.eventsList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEvents: dispatch(getEventsThunk())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventViewContainer); 