
// t通过 mutations 间接更新 state 的多个方法的对象
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
} from './mutation-types';

import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
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
};
