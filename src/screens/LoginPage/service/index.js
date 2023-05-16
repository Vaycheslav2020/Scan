import axios from "axios";
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
    }
  } catch (error) {
    console.error(error);
  }
}
