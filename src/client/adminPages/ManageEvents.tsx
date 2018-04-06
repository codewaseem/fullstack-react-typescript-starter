import * as React from "react";
import EventsForm from "../forms/EventsForm";
import { EventsContainer } from "../containers";
import { Route, Switch, withRouter } from "react-router-dom";
import { addEventThunk, updateEventThunk, deleteEventThunk, getEventsThunk } from "../../store/events";
import { connect } from "react-redux";

class ManageEventsPage extends React.Component<any, any> {

  state = {
    selectedEvent: null,
    isEditing: false,
    isDeleting: false
  };
  handleEditClick = (id) => {
    this.setState(() => ({ selectedEvent: this.props.eventsMap[id] }));
    this.props.history.push(this.props.match.url + "/edit");
  }

  handleUpdate = (event) => {
    this.props.updateEvent(event._id, event).then(() => {
      this.props.history.goBack();
    });
  }

  handleDeleteClick = (id) => {
    this.props.deleteEvent(id);
  }

  render() {
    const { history, match } = this.props;
    return (
      <Switch>
        <Route
          path={match.url}
          exact={true}
          render={() => {
            return (<div>
              <h2>All Events</h2>
              <EventsContainer handleEditClick={this.handleEditClick} handleDeleteClick={this.handleDeleteClick} />
              <hr />
              <h2>Add Event</h2>
              <EventsForm
                onSubmit={this.props.addEvent}
              />
            </div>);
          }}
        />
        <Route
          path={match.url + "/edit"}
          exact={true}
          render={() => {
            console.log(this.state.selectedEvent);
            // tslint:disable-next-line:max-line-length
            return this.state.selectedEvent && <EventsForm initialValues={this.state.selectedEvent} onSubmit={this.handleUpdate} />;
          }}
        />
      </Switch>
    );
  }
}

const mapStateToProps = ({ eventsData }) => {
  return {
    eventsList: eventsData.eventsList,
    eventsMap: eventsData.eventsMap
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEvents() {
      dispatch(getEventsThunk());
    },
    addEvent(details: any) {
      return dispatch(addEventThunk(details));
    },
    updateEvent(id: any, details: any) {
      return dispatch(updateEventThunk(id, details));
    },
    deleteEvent(id: any) {
      return dispatch(deleteEventThunk(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ManageEventsPage));