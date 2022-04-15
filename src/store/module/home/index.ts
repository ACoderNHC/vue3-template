import { ActionContext } from "vuex";
import { IHome } from "./type";
import types from "./mutation-types";

export default {
  state() {
    return {
      name: "",
    };
  },
  mutations: {
    [types.HOME_NAME](state: IHome, uName: string) {
      state.name = uName;
    },
  },
  actions: {
    [types.HOME_NAME](context: ActionContext<IHome, IHome>, payload: string) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit(types.HOME_NAME, payload);
          resolve(true);
        }, 1000);
      });
    },
  },
};
