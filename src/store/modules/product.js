import api from "@/api/product/";

const state = {
  list: [],
  listFiltered: [],
  loading: false,
  error: null
};

const getters = {
  listFiltered: state => state.listFiltered,
  loading: state => state.loading
};

const mutations = {
  REQUEST_ALL_PRODUCTS_SUCCESS(state, data) {
    state.list = [...data];
    state.listFiltered = [...state.list];
  },

  REQUEST_ERROR(state, error) {
    state.error = error;
  },

  SET_REQUEST_LOADING(state, { loading }) {
    state.loading = loading;
  },

  SET_FILTERED_LIST(state, data) {
    state.listFiltered = [...data];
  },

  CLEAR_FILTERED_LIST(state) {
    state.listFiltered = [...state.list];
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
  },

  filterList({ commit }, { query, field }) {
    const filteredList = state.list.filter(item =>
      item[field].toLowerCase().includes(query.toLowerCase())
    );
    commit("SET_FILTERED_LIST", filteredList);
  },

  clearFilteredList({ commit }) {
    commit("CLEAR_FILTERED_LIST");
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
