import axios from "axios";
import store from "../store/store";
import { setHistograms } from "../store/objectSearchData";
import { setDocumentsID } from "../store/documentsID";
import { setDocumentsItem } from "../store/documentsItem";
import { objectSearchSchema } from "../helpers/objectSearchSchema";

export const instance = axios.create({
  baseURL: "https://gateway.scan-interfax.ru/api/v1",
  timeout: 100000,
  headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
});

export const objectSearch = {
  getData: async (data) => {
    try {
      const response = await instance.post(
        "/objectsearch/histograms",
        objectSearchSchema(data)
      );
      const resData = response.data.data;
      store.dispatch(setHistograms(resData));
    } catch (error) {
      console.error(error);
    }
  },
  getID: async (data) => {
    try {
      const response = await instance.post(
        "/objectsearch",
        objectSearchSchema(data)
      );
      const resData = response.data.items;
      store.dispatch(setDocumentsID(resData));
    } catch (error) {
      console.error(error);
    }
  },

  getDocuments: async (arr) => {
    try {
      const response = await instance.post("/documents", {
        ids: arr,
      });
      const resData = response.data;
      store.dispatch(setDocumentsItem(resData));
    } catch (error) {
      console.error(error);
    }
  },
};
