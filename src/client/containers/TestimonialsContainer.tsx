import * as React from "react";
import { TestimonialViewList } from "../components";
import { connect } from "react-redux";
import { getTestimonialsThunk } from "../../store/testimonials";

class TestimonialViewContainer extends React.Component<any, any> {

  componentDidMount() {

  }
  render() {
    // tslint:disable-next-line:max-line-length
    return <TestimonialViewList testimonials={this.props.testimonials} handleEditClick={this.props.handleEditClick} handleDeleteClick={this.props.handleDeleteClick} />;
  }
}

const mapStateToProps = (store) => {
  return {
    testimonials: store.testimonialsData.testimonialsList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTestimonials: dispatch(getTestimonialsThunk())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestimonialViewContainer); 