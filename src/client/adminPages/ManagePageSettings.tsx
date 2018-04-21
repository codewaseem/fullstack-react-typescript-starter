import * as React from "react";
import PageSettingForm from "../forms/PageSettingsForm";
import { getFormValues } from "redux-form";
import { connect } from "react-redux";
import { getPageSettingsThunk, updateSettingsThunk } from "../../store/pagesetting";

class ManageSettings extends React.Component<any, any> {

  state = {
    initialValues: null,
    updated: false,
    error: false
  };

  componentDidMount() {
    this.props.getSettings().then(() => {
      this.setState(() => {
        return {
          initialValues: this.props.pageSettings
        };
      });
    });
  }

  handleSubmit = (details) => {
    this.props.updateSettings(details)
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
          <h2 className="text-center">Change Page Settings</h2>
          <PageSettingForm initialValues={this.state.initialValues} onSubmit={this.handleSubmit} />
          {this.state.updated && <div>Updated</div>}
          {this.state.error && <div>Something went wrong</div>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    formValues: getFormValues("PageSettings")(state),
    pageSettings: state.pageSettingsData.pageSettings
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSettings: () => {
      return dispatch(getPageSettingsThunk());
    },
    updateSettings: (details) => {
      return dispatch(updateSettingsThunk(details));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSettings);