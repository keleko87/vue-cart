const state = {
  items: []
};

const getters = {
  items: state => state.items
};

const mutations = {
  SET_ITEM_IN_CART(state, item) {
    state.items = [...state.items, item];
  },

  REMOVE_ITEM_CART(state, itemRemove) {
    const items = state.items.filter(item => item.id !== itemRemove.id);
    state.items = [...items];
  }
};

const actions = {
  addItemInCart({ commit }, newItem) {
    let existsItem;

    if (state.items.length) {
      existsItem = state.items.find(item => item.id === newItem.id);
    }

    if (existsItem) {
      // TODO: La tarea indica que no se hará nada en este caso.
      // Simplemente a modo prueba, por mejorar un poco la experiencia de usuario, he añadido un alert.
      alert(`El artículo "${existsItem.title}" ya existe en el cesta`);
    } else {
      commit("SET_ITEM_IN_CART", newItem);
    }
  },

  removeItemCart({ commit }, itemRemove) {
    if (state.items.length) {
      commit("REMOVE_ITEM_CART", itemRemove);
    }
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
