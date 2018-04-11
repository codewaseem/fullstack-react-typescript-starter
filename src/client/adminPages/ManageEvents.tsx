import { crudViewMaker } from "../containers";
import { getEventsThunk, updateEventThunk, deleteEventThunk, addEventThunk } from "../../store/events";
import { EventViewList } from "../components";
import * as React from "react";
import EventForm from "../forms/EventsForm";
const MyComponent = crudViewMaker({
  // tslint:disable-next-line:max-line-length
  viewComponent: ({ itemList, ...props }) => <EventViewList events={itemList} {...props} />,
  extractListFromStore: (store) => store.eventsData.eventsList,
  extractMapFromStore: (store) => store.eventsData.eventsMap,
  addFormComponent: EventForm,
  editFormComponent: EventForm,
  crudThunks: {
    get: getEventsThunk,
    add: addEventThunk,
    update: updateEventThunk,
    delete: deleteEventThunk
  }
});

export default MyComponent;