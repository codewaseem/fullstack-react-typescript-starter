import * as React from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export default function crudViewMaker({
  viewComponent: ViewComponent,
  addFormComponent: AddForm,
  editFormComponent: EditForm,
  crudThunks,
  extractListFromStore,
  extractMapFromStore
}: any) {
  class Wrapper extends React.Component<any, any> {

    state = {
      isLoading: true,
      isError: false,
      isEditing: false,
      isDeleting: false,
      selectedItem: null
    };

    setLoadingState = () => {
      this.setState(() => {
        return {
          isLoading: false
        };
      });
    }
    setErrorState = () => {
      this.setState(() => {
        return {
          isLoading: false,
          isError: true
        };
      });
    }

    setEditState = (id) => {
      this.setState(() => {
        return {
          isEditing: true,
          selectedItem: this.props.itemMap[id]
        };
      });
    }

    componentDidMount() {
      (this.props.get() || Promise.resolve())
        .then(() => this.setLoadingState())
        .catch(() => this.setErrorState());
    }

    handleEditClick = (id) => {
      this.setEditState(id);
      this.props.history.push(this.props.match.url + "/edit");
    }
    handleAddFormSubmit = (details) => {
      this.props.add(details).then(console.log).catch(() => { console.log("Add error"); });
    }

    handleUpdateFormSubmit = (details) => {
      this.props.update(details._id, details).then(() => {
        this.props.history.goBack();
      }).catch(console.log);
    }

    handleDeleteClick = (id) => {
      confirmAlert({
        title: "Confirm to submit",
        message: "Are you sure to do this.",
        buttons: [
          {
            label: "Yes",
            onClick: () => this.props.delete(id)
          },
          {
            label: "No",
            onClick: () => () => { }
          }
        ]
      });
    }

    render() {
      const { match, history } = this.props;
      return (
        <div>
          <Switch>
            <Route
              path={match.url + "/edit"}
              render={() => {
                if (this.state.selectedItem) {
                  return (
                    <div>
                      <EditForm initialValues={this.state.selectedItem} onSubmit={this.handleUpdateFormSubmit} />
                    </div>
                  );
                } else {
                  return <Redirect to={match.url} />;
                }
              }}
            />
            <Route
              render={() => {
                return (
                  <div className="flex">
                    <div className="w-full sm:w-1/2 p-2">
                      <ViewComponent
                        itemList={this.props.itemList}
                        onEditClick={this.handleEditClick}
                        onAddFormSubmit={this.handleAddFormSubmit}
                        onUpdateFormSubmit={this.handleUpdateFormSubmit}
                        onDeleteClick={this.handleDeleteClick}
                      />
                    </div>
                    <div className="w-full sm:w-1/2 p-2 bg-black rounded-lg">
                      <AddForm onSubmit={this.handleAddFormSubmit} />
                    </div>
                  </div>
                );
              }}
            />

          </Switch>
        </div>
      );
    }

  }

  const mapStateToProps = (store) => {
    return {
      itemList: extractListFromStore(store),
      itemMap: extractMapFromStore(store)
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      get: () => {
        return dispatch(crudThunks.get());
      },
      add: (details) => {
        return dispatch(crudThunks.add(details));
      },
      update: (id, details) => {
        return dispatch(crudThunks.update(id, details));
      },
      delete: (id) => {
        return dispatch(crudThunks.delete(id));
      }
    };
  };
  const ReduxWrapped = connect(mapStateToProps, mapDispatchToProps)(withRouter(Wrapper));
  return ReduxWrapped;
}