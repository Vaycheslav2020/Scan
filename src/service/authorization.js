import axios from "axios";
import store from "../store/store";
import { setAuth } from "../store/isAuth";
import { handleFormErrors } from "../screens/LoginPage/formSlice";

export async function onAuth(event, login, pass) {
  event.preventDefault();
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
    store.dispatch(handleFormErrors());
    console.error(error);
  }
}