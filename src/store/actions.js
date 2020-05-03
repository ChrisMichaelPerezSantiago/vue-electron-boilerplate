const {SET_DATA , SET_IS_LOADING_DATA} = require('./types.js');
const json = require('../assets/json/data.json');

export const actions = {
  GET_DATA({commit}){
    commit(SET_IS_LOADING_DATA , true);
    commit(SET_DATA , json.doc);
    setTimeout(() => {
      commit(SET_IS_LOADING_DATA , false);
    }, 1000);
  }
};