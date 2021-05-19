/*
 * @Author: kanglang
 * @Date: 2020-09-30 18:16:06
 * @LastEditors: kanglang
 * @LastEditTime: 2021-05-07 11:52:00
 * @Description:
 */

import { fetchGet, fetchPost, fetchDel, fetchPut, fetchPostImg, fetchPostUrl } from '../https';

export default {
  getUserInfo(params) {
    return fetchGet('user-api/api/v1/user/getUserInfo', params)
  },
  loginPwd(params) {
    return fetchGet(`user-api/api/v1/login/loginPwd`, params)
  }
}


