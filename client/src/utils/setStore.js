import axios from "axios";

export const setStore = (StoreId) => {
  if (StoreId) {
    axios.defaults.headers.common["access_store"] = StoreId;
    localStorage.setItem("store", StoreId);
  } else {
    delete axios.defaults.headers.common["access_store"];
    localStorage.removeItem("store");
  }
};
