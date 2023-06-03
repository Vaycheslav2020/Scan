import axios from "axios";
import store from "../store/store";
import { setAuth } from "../store/isAuth";

export async function onAuth(login, pass) {
  try {
    const response = await axios.post(
      "https://gateway.scan-interfax.ru/api/v1/account/login",
      {
        login: login,
        password: pass,
      }
    );
    if (response.status === 200) {
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("expire", response.data.expire);
      store.dispatch(setAuth());
    }
  } catch (error) {
    console.error(error);
  }
}
