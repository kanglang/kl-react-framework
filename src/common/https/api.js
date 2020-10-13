/*
 * @Author: kanglang
 * @Date: 2020-09-30 18:16:06
 * @LastEditors: kanglang
 * @LastEditTime: 2020-10-02 00:55:14
 * @Description:
 */

import { fetchGet, fetchPost, fetchDel, fetchPut, fetchPostImg, fetchPostUrl } from './network';

export default {
  getUserInfo (params) {
    return fetchGet('user-api/api/v1/user/getUserInfo', params)
  },
}


