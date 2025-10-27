import counterActions from './actions';
import counterGetters from './getters';
import counterMutations from './mutations';

const store = {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,
};

export default store;
