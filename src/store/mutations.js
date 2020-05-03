const {SET_DATA , SET_IS_LOADING_DATA} = require('./types.js');

export const mutations = {
  [SET_DATA](state , payload){
    state.doc.data = payload;
  },
  [SET_IS_LOADING_DATA](state , payload){
    state.doc.isLoading = payload;
  }
};