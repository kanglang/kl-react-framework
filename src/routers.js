/*
 * @Author: kanglang
 * @Date: 2020-07-14 08:47:05
 * @LastEditors: kanglang
 * @LastEditTime: 2021-04-09 11:11:16
 * @Description: 路由站
 */
import ManageHome from '@pages/manage-home';
import Nearby from '@pages/nearby';
import Mine from '@pages/mine';
import Login from '@pages/login';

export default [
  { path: '/', name: 'ManageHome', component: ManageHome },
  { path: '/Nearby', name: 'Nearby', component: Nearby },
  { path: '/Mine', name: 'Mine', component: Mine },
  { path: '/Login', name: 'Login', component: Login }
]
