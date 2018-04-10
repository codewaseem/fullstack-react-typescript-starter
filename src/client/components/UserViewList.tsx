import * as React from "react";
import UserView from "./UserView";

export default class UserViewList extends React.Component<any, any> {

  render() {
    const { users } = this.props;
    return (
      <div className="p-4">
        {(users && users.length > 0) ?
          users.map((user) => {
            return <UserView
              key={user._id}
              user={user}
              handleEditClick={this.props.handleEditClick}
              handleDeleteClick={this.props.handleDeleteClick}
            />;
          })
          :
          <div>No users found</div>
        }
      </div>
    );
  }
}