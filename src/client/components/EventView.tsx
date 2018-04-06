import * as React from "react";

export default class EventView extends React.Component<any, any> {
  render() {
    const { image_url, name, description, rsvp_link, _id: id, date, privateEvent } = this.props.event;
    const { handleEditClick, handleDeleteClick } = this.props;
    return (
      <div>
        <div><img src={image_url} /></div>
        <div>
          <div>
            <h5>Name</h5>
            <span>{name}</span>
          </div>
          <div>
            <h5>Description</h5>
            <span>{description}</span>
          </div>
          <div>
            <h5>RSVP Link</h5>
            <span>{rsvp_link}</span>
          </div>
          <div>
            <h5>Date</h5>
            <span>{(new Date(date).toLocaleDateString())}</span>
          </div>
          <div>
            <h5>Private Event</h5>
            <span>{privateEvent}</span>
          </div>
        </div>
        <div>
          <span onClick={() => { handleEditClick(id); }}>Edit</span>
          <span onClick={() => { handleDeleteClick(id); }}>Delete</span>
        </div>
      </div>
    );
  }
}