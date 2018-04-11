import { crudViewMaker } from "../containers";
import { getGuestsThunk, updateGuestThunk, deleteGuestThunk, addGuestThunk } from "../../store/guests";
import { GuestViewList } from "../components";
import * as React from "react";
import GuestForm from "../forms/GuestForm";

const MyComponent = crudViewMaker({
  // tslint:disable-next-line:max-line-length
  viewComponent: ({ itemList, ...props }) => <GuestViewList guests={itemList} {...props} />,
  extractListFromStore: (store) => store.guestsData.guestsList,
  extractMapFromStore: (store) => store.guestsData.guestsMap,
  addFormComponent: GuestForm,
  editFormComponent: GuestForm,
  crudThunks: {
    get: getGuestsThunk,
    add: addGuestThunk,
    update: updateGuestThunk,
    delete: deleteGuestThunk
  }
});

export default MyComponent;