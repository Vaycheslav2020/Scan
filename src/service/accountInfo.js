import axios from "axios";
import store from "../store/store";
import { setAccountData } from "../store/accountData";
const { accessToken } = localStorage;

export default async function setInfoAccount() {
  try {
    const response = await axios.get(
      "https://gateway.scan-interfax.ru/api/v1/account/info",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    const data = response.data.eventFiltersInfo;
    store.dispatch(setAccountData(data));
  } catch (error) {
    console.error(error);
  }
}
