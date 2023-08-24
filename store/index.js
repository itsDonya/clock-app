export const state = () => ({
  snackbarText: "",
  snackbarShow: false,
});

export const mutations = {
  showSnackbar(state, value) {
    state.snackbarText = value;
    state.snackbarShow = true;

    setTimeout(() => {
      state.snackbarShow = false;
      state.snackbarText = "";
    }, 5000);
  },
};

export const actions = {
  showSnackbar({ commit }, value) {
    commit("showSnackbar", value);
  },
};

export const getters = {};
