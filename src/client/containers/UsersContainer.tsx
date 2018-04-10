import * as React from "react";
import { UserViewList } from "../components";
import { connect } from "react-redux";
import { getUsersThunk } from "../../store/users";

class UserViewContainer extends React.Component<any, any> {

  componentDidMount() {

  }
  render() {
    // tslint:disable-next-line:max-line-length
    return <UserViewList users={this.props.users} handleEditClick={this.props.handleEditClick} handleDeleteClick={this.props.handleDeleteClick} />;
  }
}

const mapStateToProps = (store) => {
  return {
    users: store.usersData.usersList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: dispatch(getUsersThunk())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserViewContainer); 