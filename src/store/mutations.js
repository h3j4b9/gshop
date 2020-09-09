
// 直接更新 state 的多个方法的对象
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  LOGOUT,
} from './mutation-types';

export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address;
  },
  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys;
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops;
  },
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo;
  },
  [LOGOUT] (state) {
    state.userInfo = {};
  },
};
