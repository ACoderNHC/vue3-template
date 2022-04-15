import { createStore } from "vuex";
import Home from "./module/home";

export default createStore({
  modules: {
    homeData: Home,
  },
});
