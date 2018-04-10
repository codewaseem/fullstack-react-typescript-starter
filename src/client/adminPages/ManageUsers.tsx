import * as React from "react";
import UsersForm from "../forms/UserRegistrationForm";
import { UsersContainer } from "../containers";
import { Route, Switch, withRouter } from "react-router-dom";
import { addUserThunk, updateUserThunk, deleteUserThunk, getUsersThunk } from "../../store/users";
import { connect } from "react-redux";

class ManageUsersPage extends React.Component<any, any> {

  state = {
    selectedUser: null,
    isEditing: false,
    isDeleting: false
  };
  handleEditClick = (id) => {
    this.setState(() => ({ selectedUser: this.props.usersMap[id] }));
    this.props.history.push(this.props.match.url + "/edit");
  }

  handleUpdate = (user) => {
    this.props.updateUser(user._id, user).then(() => {
      this.props.history.goBack();
    });
  }

  handleDeleteClick = (id) => {
    this.props.deleteUser(id);
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
              <h2>All Users</h2>
              <UsersContainer handleEditClick={this.handleEditClick} handleDeleteClick={this.handleDeleteClick} />
              <hr />
              <h2>Add User</h2>
              <UsersForm
                onSubmit={this.props.addUser}
              />
            </div>);
          }}
        />
        <Route
          path={match.url + "/edit"}
          exact={true}
          render={() => {
            console.log(this.state.selectedUser);
            // tslint:disable-next-line:max-line-length
            return this.state.selectedUser && <UsersForm initialValues={this.state.selectedUser} onSubmit={this.handleUpdate} />;
          }}
        />
      </Switch>
    );
  }
}

const mapStateToProps = ({ usersData }) => {
  return {
    usersList: usersData.usersList,
    usersMap: usersData.usersMap
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers() {
      dispatch(getUsersThunk());
    },
    addUser(details: any) {
      return dispatch(addUserThunk(details));
    },
    updateUser(id: any, details: any) {
      return dispatch(updateUserThunk(id, details));
    },
    deleteUser(id: any) {
      return dispatch(deleteUserThunk(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ManageUsersPage));