import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

axios.defaults.baseURL = "http://megafon/api";
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error(error);
    return Promise.reject(error);
  }
);

if (localStorage.token) {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.token}`;
}

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    setLoading(state, value) {
      state.loading = value;
    }
  },
  actions: {
    async login({ commit }, data) {
      commit("setLoading", true);

      await axios
        .post("/login", data, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          localStorage.token = response.data.token;
          commit("setLoading", false);
          location.reload();
        });
    },

    async logout({ commit }) {
      commit("setLoading", true);

      await axios.get("/logout").then(() => {
        alert("Вы вышли");
        localStorage.removeItem("token");
        commit("setLoading", false);
        location.reload();
      });
    },

    async register({ commit }, data) {
      commit("setLoading", true);

      await axios
        .post("/register", data, {
          Accept: "application/json",
          "Content-Type": "application/json"
        })
        .then(() => {
          alert("Вы успешно зарегистрированы! Теперь надо войти.");
          location.href = "/login";
        });
    }
  },
  modules: {}
});
