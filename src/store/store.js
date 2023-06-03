import { configureStore } from "@reduxjs/toolkit";
// 
import checkedTariff from "../screens/HomePage/tariffSlice";
import isAuth  from "./isAuth";
import accountData from "./accountData";
import histograms from "./objectSearchData";

export default configureStore({
  reducer: {
    activeTariff: checkedTariff,
    isAuth,
    accountData,
    histograms,
  },
});
