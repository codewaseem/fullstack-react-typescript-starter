import * as React from "react";
import EventView from "./EventView";

export default class EventViewList extends React.Component<any, any> {

  render() {
    const { events } = this.props;
    return (
      <div>
        {
          events.map((event) => {
            return <EventView
              key={event._id}
              event={event}
              handleEditClick={this.props.handleEditClick}
              handleDeleteClick={this.props.handleDeleteClick}
            />;
          })
        }
      </div>
    );
  }
}