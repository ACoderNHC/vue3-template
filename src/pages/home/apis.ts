import axios from "@/apis/index";
import { IHomeDataParam } from "./type";

const getHomeData = (params: IHomeDataParam) => {
  return axios.get("/pet/1", {
    params,
  });
};

export default {
  getHomeData,
};
