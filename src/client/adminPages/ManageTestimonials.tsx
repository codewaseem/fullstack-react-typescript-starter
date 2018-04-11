import { crudViewMaker } from "../containers";
// tslint:disable-next-line:max-line-length
import { getTestimonialsThunk, updateTestimonialThunk, deleteTestimonialThunk, addTestimonialThunk } from "../../store/testimonials";
import { TestimonialViewList } from "../components";
import * as React from "react";
import TestimonialForm from "../forms/TestimonialForm";
const MyComponent = crudViewMaker({
  // tslint:disable-next-line:max-line-length
  viewComponent: ({ itemList, ...props }) => <TestimonialViewList testimonials={itemList} {...props} />,
  extractListFromStore: (store) => store.testimonialsData.testimonialsList,
  extractMapFromStore: (store) => store.testimonialsData.testimonialsMap,
  addFormComponent: TestimonialForm,
  editFormComponent: TestimonialForm,
  crudThunks: {
    get: getTestimonialsThunk,
    add: addTestimonialThunk,
    update: updateTestimonialThunk,
    delete: deleteTestimonialThunk
  }
});

export default MyComponent;