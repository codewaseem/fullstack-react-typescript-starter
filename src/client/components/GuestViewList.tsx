import * as React from "react";
import GuestView from "./GuestView";

export default class GuestViewList extends React.Component<any, any> {

  render() {
    const { guests } = this.props;
    return (
      <div>
        {
          guests && guests.length > 0 ?
            guests.map((guest) => {
              return <GuestView
                key={guest._id}
                guest={guest}
                onEditClick={this.props.onEditClick}
                onDeleteClick={this.props.onDeleteClick}
              />;
            })
            :
            <h4 className="m-4">No Guests/Community Members</h4>
        }
      </div>
    );
  }
}