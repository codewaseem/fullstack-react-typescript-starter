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
              onEditClick={this.props.onEditClick}
              onDeleteClick={this.props.onDeleteClick}
            />;
          })
          :
          <h4 className="text-white m-4">No users found</h4>
        }
      </div>
    );
  }
}