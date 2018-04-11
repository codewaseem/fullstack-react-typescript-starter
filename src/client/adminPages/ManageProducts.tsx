import { crudViewMaker } from "../containers";
import { getProductsThunk, updateProductThunk, deleteProductThunk, addProductThunk } from "../../store/products";
import { ProductViewList } from "../components";
import * as React from "react";
import ProductForm from "../forms/ProductForm";
const MyComponent = crudViewMaker({
  // tslint:disable-next-line:max-line-length
  viewComponent: ({ itemList, ...props }) => <ProductViewList products={itemList} {...props} />,
  extractListFromStore: (store) => store.productsData.productsList,
  extractMapFromStore: (store) => store.productsData.productsMap,
  addFormComponent: ProductForm,
  editFormComponent: ProductForm,
  crudThunks: {
    get: getProductsThunk,
    add: addProductThunk,
    update: updateProductThunk,
    delete: deleteProductThunk
  }
});

export default MyComponent;