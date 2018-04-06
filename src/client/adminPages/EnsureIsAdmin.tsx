import * as React from "react";
import { getAuthData } from "../utils";
import { verifyAdminThunk } from "../../store/user";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    isRequested: state.auth.adminVerifyRequestMade,
    isAdmin: state.auth.isAdmin
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verifyAdmin() {
      return dispatch(verifyAdminThunk());
    }
  };
};
export function EnsureAdmin(Component: any) {
  class Wrapper extends React.Component<any, any> {
    state = {
      isRequested: false
    };

    setRequested = () => {
      this.setState(() => {
        return {
          isRequested: true
        };
      });
    }
    componentDidMount() {
      if (!this.props.isRequested) {
        this.props.verifyAdmin()
          .then(this.setRequested)
          .catch(this.setRequested);
      } else {
        this.setRequested();
      }
    }
    render() {
      if (!this.state.isRequested) {
        return <div>Loading...</div>;
      } else {
        if (this.props.isAdmin) {
          return <Component />;
        } else {
          return <Redirect to="/" />;
        }
      }
    }
  }
  return connect(mapStateToProps, mapDispatchToProps)(Wrapper);
}