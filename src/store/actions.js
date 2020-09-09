
// t通过 mutations 间接更新 state 的多个方法的对象
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  LOGOUT,
} from './mutation-types';

import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
} from '../api';

export default {
  // 异步获取地址
  async getAddress ({commit, state}) {
    let geohash = state.latitude + ',' + state.longitude;
    let ref = await reqAddress(geohash);
    if (ref.code === 0) {
      commit(RECEIVE_ADDRESS, {address: ref.data});
    }
  },
  // 异步获取分类列表
  async getCategorys ({commit}) {
    let ref = await reqFoodCategorys();
    if (ref.code === 0) {
      commit(RECEIVE_CATEGORYS, {categorys: ref.data});
    }
  },
  // 异步获取商家列表
  async getShops ({commit, state}) {
    let {latitude, longitude} = state; // 解构赋值
    let ref = await reqShops(latitude, longitude);
    if (ref.code === 0) {
      commit(RECEIVE_SHOPS, {shops: ref.data});
    }
  },
  // 获取用户信息
  recoudUser ({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo});
  },

  async getUser ({commit}) {
    let res = await reqUserInfo();
    if (res.code === 0) {
      let userInfo = res.data;
      commit(RECEIVE_USER_INFO, {userInfo});
    }
  },

  // 退出
  async reqLogout ({commit}) {
    let res = await reqLogout();
    console.log(res);
    if (res.code === 0) {
      commit(LOGOUT);
    }
  },
};
