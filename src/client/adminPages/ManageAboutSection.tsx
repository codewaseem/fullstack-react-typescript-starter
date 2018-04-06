import * as React from "react";
import AboutUsForm from "../forms/AboutUsForm";
import { connect } from "react-redux";
import { getAboutUsThunk, postAboutUsThunk } from "../../store/aboutus";

class ManageAboutUs extends React.Component<any, any> {

  state = {
    initialValues: null,
    updated: false,
    error: false
  };

  componentDidMount() {
    this.props.getAboutUsDetails().then(() => {
      this.setState(() => {
        return {
          initialValues: this.props.aboutUsDetails
        };
      });
    });
  }

  handleSubmit = (details) => {
    this.props.submitAboutUsDetails(details)
      .then(() => {
        this.setState(() => {
          return {
            updated: true
          };
        });
      })
      .catch(() => {
        this.setState(() => {
          return {
            error: true
          };
        });
      });
  }

  render() {
    return (
      <div>
        <AboutUsForm initialValues={this.state.initialValues} onSubmit={this.handleSubmit} />
        {this.state.updated && <div>Updated</div>}
        {this.state.error && <div>Something went wrong</div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    aboutUsDetails: state.aboutUsData.aboutUsDetails
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAboutUsDetails: () => {
      return dispatch(getAboutUsThunk());
    },
    submitAboutUsDetails: (details) => {
      return dispatch(postAboutUsThunk(details));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageAboutUs);