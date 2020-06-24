import { auth } from "../../firebase/utils";
import { takeLatest, put, call, all } from "redux-saga/effects";
import { setProducts } from "./products.actions";
import { handleAddProduct, handleFetchProducts } from "./products.helpers";
import productsTypes from "./products.types";

export function* addProducts({
  payload: { productCategory, productName, productThumbnail, productPrice },
}) {
  try {
    const timestamp = new Date();
    yield handleAddProduct({
      productCategory,
      productName,
      productThumbnail,
      productPrice,
      productAdminUserUID: auth.currentUser.uid,
      createdDate: timestamp,
    });
  } catch (err) {
    //    console.log(err);
  }
}

export function* onAddProductStart() {
  yield takeLatest(productsTypes.ADD_NEW_PRODUCT_START, addProducts);
}

export function* fetchProducts() {
  try {
    const products = yield handleFetchProducts();
    yield put(setProducts(products));
  } catch (err) {
    // console.log(err);
  }
}

export function* onFetchProductsStart() {
  yield takeLatest(productsTypes.FETCH_PRODUCTS_START, fetchProducts);
}

export default function* productsSagas() {
  yield all([call(onAddProductStart), call(onFetchProductsStart)]);
}
