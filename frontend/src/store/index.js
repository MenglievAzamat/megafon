import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

axios.defaults.baseURL = "http://megafon/api";
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.config.url === "/login") {
      alert("Неверные email или пароль! Попробуйте ещё раз");
    } else {
      alert(error);
    }
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
    loading: false,
    categories: {},
    roles: {},
    videos: {},
    user: false,
    users: [],

    videos_url: "http://megafon/api/videos/"
  },
  mutations: {
    setLoading(state, value) {
      state.loading = value;
    },
    setCategories(state, value) {
      state.categories = value;
    },
    setRoles(state, value) {
      state.roles = value;
    },
    setVideos(state, value) {
      state.videos = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setUsers(state, value) {
      state.users = value;
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
    },

    async loadCategories({ commit }) {
      commit("setLoading", true);

      await axios.get("/categories").then(response => {
        let tmp = {};

        for (let resp of response.data.result) {
          tmp[resp.id] = resp.category_name;
        }

        commit("setCategories", tmp);
        commit("setLoading", false);
      });
    },

    async uploadFile({ commit }, data) {
      commit("setLoading", true);

      await axios
        .post("/file/upload", data, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(() => {
          alert("Видео успешно загружено!");
          commit("setLoading", false);
          location.href = "/videos/categories";
        });
    },

    async fetchVideosByCategory({ commit }, id) {
      commit("setLoading", true);

      await axios.get(`/category/videos/${id}`).then(response => {
        commit("setVideos", response.data.result);
        commit("setLoading", false);
      });
    },

    async getUser({ commit }) {
      commit("setLoading", true);

      await axios.get("/user").then(response => {
        commit("setUser", response.data.user);
        commit("setLoading", false);
      });
    },

    async getAllUsers({ commit }) {
      commit("setLoading", true);

      await axios.get("/users/all").then(response => {
        commit("setUsers", response.data.result);
        commit("setLoading", false);
      });
    },

    async changeRole({ commit }, id) {
      commit("setLoading", true);

      await axios.post(`/user/role/${id}`).then(() => {
        location.reload();
      });
    }
  },
  modules: {}
});
