/**
 * 处理合并多语言
 * by tommyshao <shaojinhong@kuaizi.co>
 */

import Vue from 'vue'
import deepmerge from 'deepmerge'
import lang from '../../i18n'

export default {
  created () {
    const vuei18n = Object.getPrototypeOf(this || Vue).$t
    if (typeof vuei18n === 'function') {
      Object.keys(lang).forEach(l => {
        Vue.locale(
          l,
          deepmerge(lang[l], Vue.locale(l) || {}, { clone: true })
        )
      })
    }
  }
}
