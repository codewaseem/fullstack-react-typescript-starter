import * as React from "react";
import GuestsForm from "../forms/GuestForm";
import { GuestsContainer } from "../containers";
import { Route, Switch, withRouter } from "react-router-dom";
import { addGuestThunk, updateGuestThunk, deleteGuestThunk, getGuestsThunk } from "../../store/guests";
import { connect } from "react-redux";

class ManageGuestsPage extends React.Component<any, any> {

  state = {
    selectedGuest: null,
    isEditing: false,
    isDeleting: false
  };
  handleEditClick = (id) => {
    this.setState(() => ({ selectedGuest: this.props.guestsMap[id] }));
    this.props.history.push(this.props.match.url + "/edit");
  }

  handleUpdate = (guest) => {
    this.props.updateGuest(guest._id, guest).then(() => {
      this.props.history.goBack();
    });
  }

  handleDeleteClick = (id) => {
    this.props.deleteGuest(id);
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
              <h2>All Guests</h2>
              <GuestsContainer handleEditClick={this.handleEditClick} handleDeleteClick={this.handleDeleteClick} />
              <hr />
              <h2>Add Guest</h2>
              <GuestsForm
                onSubmit={this.props.addGuest}
              />
            </div>);
          }}
        />
        <Route
          path={match.url + "/edit"}
          exact={true}
          render={() => {
            console.log(this.state.selectedGuest);
            // tslint:disable-next-line:max-line-length
            return this.state.selectedGuest && <GuestsForm initialValues={this.state.selectedGuest} onSubmit={this.handleUpdate} />;
          }}
        />
      </Switch>
    );
  }
}

const mapStateToProps = ({ guestsData }) => {
  return {
    guestsList: guestsData.guestsList,
    guestsMap: guestsData.guestsMap
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGuests() {
      dispatch(getGuestsThunk());
    },
    addGuest(details: any) {
      return dispatch(addGuestThunk(details));
    },
    updateGuest(id: any, details: any) {
      return dispatch(updateGuestThunk(id, details));
    },
    deleteGuest(id: any) {
      return dispatch(deleteGuestThunk(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ManageGuestsPage));