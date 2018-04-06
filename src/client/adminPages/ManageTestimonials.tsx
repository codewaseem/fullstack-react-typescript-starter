import * as React from "react";
import TestimonialsForm from "../forms/TestimonialForm";
import { TestimonialsContainer } from "../containers";
import { Route, Switch, withRouter } from "react-router-dom";
// tslint:disable-next-line:max-line-length
import { addTestimonialThunk, updateTestimonialThunk, deleteTestimonialThunk, getTestimonialsThunk } from "../../store/testimonials";
import { connect } from "react-redux";

class ManageTestimonialsPage extends React.Component<any, any> {

  state = {
    selectedTestimonial: null,
    isEditing: false,
    isDeleting: false
  };
  handleEditClick = (id) => {
    this.setState(() => ({ selectedTestimonial: this.props.testimonialsMap[id] }));
    this.props.history.push(this.props.match.url + "/edit");
  }

  handleUpdate = (testimonial) => {
    this.props.updateTestimonial(testimonial._id, testimonial).then(() => {
      this.props.history.goBack();
    });
  }

  handleDeleteClick = (id) => {
    this.props.deleteTestimonial(id);
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
              <h2>All Testimonials</h2>
              <TestimonialsContainer
                handleEditClick={this.handleEditClick}
                handleDeleteClick={this.handleDeleteClick}
              />
              <hr />
              <h2>Add Testimonial</h2>
              <TestimonialsForm
                onSubmit={this.props.addTestimonial}
              />
            </div>);
          }}
        />
        <Route
          path={match.url + "/edit"}
          exact={true}
          render={() => {
            console.log(this.state.selectedTestimonial);
            // tslint:disable-next-line:max-line-length
            return this.state.selectedTestimonial && <TestimonialsForm initialValues={this.state.selectedTestimonial} onSubmit={this.handleUpdate} />;
          }}
        />
      </Switch>
    );
  }
}

const mapStateToProps = ({ testimonialsData }) => {
  return {
    testimonialsList: testimonialsData.testimonialsList,
    testimonialsMap: testimonialsData.testimonialsMap
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTestimonials() {
      dispatch(getTestimonialsThunk());
    },
    addTestimonial(details: any) {
      return dispatch(addTestimonialThunk(details));
    },
    updateTestimonial(id: any, details: any) {
      return dispatch(updateTestimonialThunk(id, details));
    },
    deleteTestimonial(id: any) {
      return dispatch(deleteTestimonialThunk(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ManageTestimonialsPage));