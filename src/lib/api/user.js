/**
 * User Model 相关 API
 * by tommyshao <shaojinhong@kuaizi.co>
 */
import Vue from 'vue'
import kzFetch from './fetch'

export const LOG_IN_URL = '/cgi/user/login'
export const LOG_OUT_URL = '/cgi/user/logout'

// 用户登录接口
export const userLogin = (payload, options = {}) => {
  // return Vue.http.post(LOG_IN_URL, payload, options)
  // @todo: test
  // return Vue.http.post('/user/login', payload, options)
  return kzFetch({ type: 'post', url: '/user/login', data: payload, options })
}

// 用户注销接口
export const userLoginOut = (payload, options = {}) => {
  // return Vue.http.post(LOG_OUT_URL, payload, options)
  // @todo: test
  return Vue.http.get('/static/user.json', payload, options)
}

