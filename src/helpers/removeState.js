import store from "../store/store";
import { setAuth } from "../store/isAuth";
import { deleteCheckedTariff } from "../screens/HomePage/tariffSlice";
import { deleteAccountData } from "../store/accountData";
import { deleteDocumentsID } from "../store/documentsID";
import { deleteDocumentsItem } from "../store/documentsItem";
import { deleteHistograms } from "../store/objectSearchData";

export const removeState = () => {
  localStorage.clear();
  store.dispatch(setAuth());
  store.dispatch(deleteCheckedTariff());
  store.dispatch(deleteAccountData());
  store.dispatch(deleteDocumentsID());
  store.dispatch(deleteDocumentsItem());
  store.dispatch(deleteHistograms());
};
