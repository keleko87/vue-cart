import api from "@/api/product/";

const state = {
  list: [],
  loading: false,
  error: null
};

const getters = {
  list: state => state.list,
  loading: state => state.loading
};

const mutations = {
  REQUEST_ALL_PRODUCTS_SUCCESS(state, data) {
    state.list = [...data];
  },

  REQUEST_ERROR(state, error) {
    state.error = error;
  },

  SET_REQUEST_LOADING(state, { loading }) {
    state.loading = loading;
  }
};

const actions = {
  requestAllProductsSuccess({ commit }, data) {
    commit("REQUEST_ALL_PRODUCTS_SUCCESS", data);
  },

  requestError({ commit }, error) {
    commit("REQUEST_ERROR", error);
  },

  async findAll({ commit, dispatch }) {
    commit("SET_REQUEST_LOADING", { loading: true });

    try {
      const response = await api.findAll();
      dispatch("requestAllProductsSuccess", response.data);
    } catch (e) {
      dispatch("requestError", e);
    }

    commit("SET_REQUEST_LOADING", { loading: false });
  }
};

const module = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default module;
