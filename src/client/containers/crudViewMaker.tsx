import * as React from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import Modal from "react-responsive-modal";

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

    unsetEditState = () => {
      this.setState(() => {
        return {
          isEditing: false,
          selectedItem: null
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
    }
    handleAddFormSubmit = (details) => {
      this.props.add(details).then(console.log).catch(() => { console.log("Add error"); });
    }

    handleUpdateFormSubmit = (details) => {
      this.props.update(details._id, details).then(() => {
        this.unsetEditState();
      }).catch(console.log);
    }

    handleDeleteClick = (id) => {
      confirmAlert({
        title: "Confirm Delete",
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
      const { isEditing } = this.state;
      return (
        <div>
          <div>
            <Modal open={isEditing} onClose={this.unsetEditState} little={true}>
              <div>
                <EditForm initialValues={this.state.selectedItem} onSubmit={this.handleUpdateFormSubmit} />
              </div>
            </Modal>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-2/3 p-2">
              <ViewComponent
                itemList={this.props.itemList}
                onEditClick={this.handleEditClick}
                onAddFormSubmit={this.handleAddFormSubmit}
                onUpdateFormSubmit={this.handleUpdateFormSubmit}
                onDeleteClick={this.handleDeleteClick}
              />
            </div>
            <div
              className="w-full text-white md:w-1/3 p-2 bg-black rounded-lg"
              style={{
                height: "fit-content"
              }}
            >
              <AddForm onSubmit={this.handleAddFormSubmit} />
            </div>
          </div>
        </div >
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