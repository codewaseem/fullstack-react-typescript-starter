import * as React from "react";
import TestimonialView from "./TestimonialView";

export default class TestimonialViewList extends React.Component<any, any> {

  render() {
    const { testimonials } = this.props;
    return (
      <div>
        {
          testimonials.map((testimonial) => {
            return <TestimonialView
              key={testimonial._id}
              testimonial={testimonial}
              onEditClick={this.props.onEditClick}
              onDeleteClick={this.props.onDeleteClick}
            />;
          })
        }
      </div>
    );
  }
}