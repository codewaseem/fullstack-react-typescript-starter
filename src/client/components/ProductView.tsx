import * as React from "react";

export default class ProductView extends React.Component<any, any> {
  render() {
    const { image_url, name, description, rsvp_link, _id: id } = this.props.product;
    const { handleEditClick = (i) => { }, handleDeleteClick = (i) => { } } = this.props;
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
        </div>
        <div>
          <span onClick={() => { handleEditClick(id); }}>Edit</span>
          <span onClick={() => { handleDeleteClick(id); }}>Delete</span>
        </div>
      </div>
    );
  }
}