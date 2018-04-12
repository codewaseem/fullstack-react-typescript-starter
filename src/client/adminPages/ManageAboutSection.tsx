import * as React from "react";
import { AboutUsView } from "../components";
import AboutUsForm from "../forms/AboutUsForm";
import { getFormValues } from "redux-form";
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
      <div className="flex flex-wrap">
        <div className="w-1/2 mx-auto bg-black text-white">
          <h2 className="text-center">Modify About Us Section</h2>
          <AboutUsForm initialValues={this.state.initialValues} onSubmit={this.handleSubmit} />
          {this.state.updated && <div>Updated</div>}
          {this.state.error && <div>Something went wrong</div>}
        </div>
        {this.props.formValues && <div className="flex-1">
          <h2 className="text-center">Live Preview</h2>
          <p className="text-grey text-center">Actual view vary</p>
          <AboutUsView data={this.props.formValues} /></div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    formValues: getFormValues("AboutUs")(state),
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