import { configureStore } from "@reduxjs/toolkit";
//
import checkedTariff from "../screens/HomePage/tariffSlice";
import isAuth from "./isAuth";
import errorAuth from "./errorAuth";
import accountData from "./accountData";
import histograms from "./objectSearchData";
import documentsID from "./documentsID";
import documentsItem from "./documentsItem";

export default configureStore({
  reducer: {
    activeTariff: checkedTariff,
    isAuth,
    errorAuth,
    accountData,
    histograms,
    documentsID,
    documentsItem,
  },
});
