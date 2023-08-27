export const state = () => ({
  snackbarText: "",
  snackbarShow: false,
});

export const mutations = {
  showSnackbar(state, value) {
    state.snackbarText = value;
    state.snackbarShow = true;
  },
  hideSnackbar(state) {
    state.snackbarShow = false;
    state.snackbarText = "";
  },
};

export const actions = {
  showSnackbar({ commit }, value) {
    commit("showSnackbar", value);

    setTimeout(() => {
      commit("hideSnackbar");
    }, 3000);
  },
};

export const getters = {};
