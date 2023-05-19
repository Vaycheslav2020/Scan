import { configureStore } from "@reduxjs/toolkit";
// 
import checkedTariff from "../screens/HomePage/tariffSlice";
import formSlice from "../screens/LoginPage/formSlice";
import isAuth  from "./isAuth";
import accountData from "./accountData";

export default configureStore({
  reducer: {
    activeTariff: checkedTariff,
    formState: formSlice,
    isAuth: isAuth,
    accountData: accountData,
  },
});
