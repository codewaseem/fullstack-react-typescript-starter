import { crudViewMaker } from "../containers";
import { getUsersThunk, updateUserThunk, deleteUserThunk, addUserThunk } from "../../store/users";
import { UserViewList } from "../components";
import * as React from "react";
import UserForm from "../forms/UserRegistrationForm";
const MyComponent = crudViewMaker({
  // tslint:disable-next-line:max-line-length
  viewComponent: ({ itemList, ...props }) => <UserViewList users={itemList} {...props} />,
  extractListFromStore: (store) => store.usersData.usersList,
  extractMapFromStore: (store) => store.usersData.usersMap,
  addFormComponent: UserForm,
  editFormComponent: UserForm,
  crudThunks: {
    get: getUsersThunk,
    add: addUserThunk,
    update: updateUserThunk,
    delete: deleteUserThunk
  }
});

export default MyComponent;