import * as React from "react";
import SponsorsForm from "../forms/SponsorsForm";
import { SponsorsContainer } from "../containers";
import { Route, Switch, withRouter } from "react-router-dom";
import { addSponsorThunk, updateSponsorThunk, deleteSponsorThunk, getSponsorsThunk } from "../../store/sponsors";
import { connect } from "react-redux";

class ManageSponsorsPage extends React.Component<any, any> {

  state = {
    selectedSponsor: null,
    isEditing: false,
    isDeleting: false
  };
  handleEditClick = (id) => {
    this.setState(() => ({ selectedSponsor: this.props.sponsorsMap[id] }));
    this.props.history.push(this.props.match.url + "/edit");
  }

  handleUpdate = (sponsor) => {
    this.props.updateSponsor(sponsor._id, sponsor).then(() => {
      this.props.history.goBack();
    });
  }

  handleDeleteClick = (id) => {
    this.props.deleteSponsor(id);
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
              <h2>All Sponsors</h2>
              <SponsorsContainer handleEditClick={this.handleEditClick} handleDeleteClick={this.handleDeleteClick} />
              <hr />
              <h2>Add Sponsor</h2>
              <SponsorsForm
                onSubmit={this.props.addSponsor}
              />
            </div>);
          }}
        />
        <Route
          path={match.url + "/edit"}
          exact={true}
          render={() => {
            console.log(this.state.selectedSponsor);
            // tslint:disable-next-line:max-line-length
            return this.state.selectedSponsor && <SponsorsForm initialValues={this.state.selectedSponsor} onSubmit={this.handleUpdate} />;
          }}
        />
      </Switch>
    );
  }
}

const mapStateToProps = ({ sponsorsData }) => {
  return {
    sponsorsList: sponsorsData.sponsorsList,
    sponsorsMap: sponsorsData.sponsorsMap
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSponsors() {
      dispatch(getSponsorsThunk());
    },
    addSponsor(details: any) {
      return dispatch(addSponsorThunk(details));
    },
    updateSponsor(id: any, details: any) {
      return dispatch(updateSponsorThunk(id, details));
    },
    deleteSponsor(id: any) {
      return dispatch(deleteSponsorThunk(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ManageSponsorsPage));