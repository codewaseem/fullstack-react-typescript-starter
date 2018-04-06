import * as React from "react";
import SponsorView from "./SponsorView";

export default class SponsorViewList extends React.Component<any, any> {

  render() {
    const { sponsors } = this.props;
    return (
      <div>
        {
          sponsors.map((sponsor) => {
            return <SponsorView
              key={sponsor._id}
              sponsor={sponsor}
              handleEditClick={this.props.handleEditClick}
              handleDeleteClick={this.props.handleDeleteClick}
            />;
          })
        }
      </div>
    );
  }
}