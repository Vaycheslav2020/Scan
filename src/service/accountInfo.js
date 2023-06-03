
import store from "../store/store";
import { setAccountData } from "../store/accountData";

import { instance } from "./api";

export default async function setInfoAccount() {
  try {
    const response = await instance.get(
      "api/v1/account/info",
    );
    const data = response.data.eventFiltersInfo;
    store.dispatch(setAccountData(data));
  } catch (error) {
    console.error(error);
  }
}
