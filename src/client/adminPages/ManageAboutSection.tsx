import * as React from "react";
import AboutUsForm from "../forms/AboutUsForm";
import { connect } from "react-redux";
import { getAboutUsThunk, postAboutUsThunk } from "../../store/aboutus";

class ManageAboutUs extends React.Component<any, any> {

  state = {
    initialValues: null
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

  render() {
    return <AboutUsForm initialValues={this.state.initialValues} onSubmit={this.props.submitAboutUsDetails} />;
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