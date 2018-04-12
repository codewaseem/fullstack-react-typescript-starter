import * as React from "react";
import EventView from "./EventView";

export default class EventViewList extends React.Component<any, any> {

  render() {
    const { events } = this.props;
    return (
      <div>
        {
          events && events.length > 0 ?
            events.map((event) => {
              return <EventView
                key={event._id}
                event={event}
                onEditClick={this.props.onEditClick}
                onDeleteClick={this.props.onDeleteClick}
              />;
            })
            :
            <h4 className="m-4">No Events</h4>
        }
      </div>
    );
  }
}