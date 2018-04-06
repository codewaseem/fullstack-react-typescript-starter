import * as React from "react";

export default class TestimonialView extends React.Component<any, any> {
  render() {
    const { image_url, name, description, rsvp_link, _id: id } = this.props.testimonial;
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
            <span>{(new Date().toLocaleDateString())}</span>
          </div>
          <div>
            <h5>Private Testimonial</h5>
            <span>{}</span>
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