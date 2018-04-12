import { crudViewMaker } from "../containers";
import { getSponsorsThunk, updateSponsorThunk, deleteSponsorThunk, addSponsorThunk } from "../../store/sponsors";
import { SponsorViewList } from "../components";
import * as React from "react";
import SponsorForm from "../forms/SponsorsForm";

const MyComponent = crudViewMaker({
  // tslint:disable-next-line:max-line-length
  viewComponent: ({ itemList, ...props }) => <SponsorViewList sponsors={itemList} {...props} />,
  extractListFromStore: (store) => store.sponsorsData.sponsorsList,
  extractMapFromStore: (store) => store.sponsorsData.sponsorsMap,
  addFormComponent: SponsorForm,
  editFormComponent: SponsorForm,
  crudThunks: {
    get: getSponsorsThunk,
    add: addSponsorThunk,
    update: updateSponsorThunk,
    delete: deleteSponsorThunk
  }
});

export default MyComponent;