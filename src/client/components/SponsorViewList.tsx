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
              onEditClick={this.props.onEditClick}
              onDeleteClick={this.props.onDeleteClick}
            />;
          })
        }
      </div>
    );
  }
}