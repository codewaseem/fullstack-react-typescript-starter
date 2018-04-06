import * as React from "react";
import GuestView from "./GuestView";

export default class GuestViewList extends React.Component<any, any> {

  render() {
    const { guests } = this.props;
    return (
      <div>
        {
          guests.map((guest) => {
            return <GuestView
              key={guest._id}
              guest={guest}
              handleEditClick={this.props.handleEditClick}
              handleDeleteClick={this.props.handleDeleteClick}
            />;
          })
        }
      </div>
    );
  }
}