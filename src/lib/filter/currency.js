/**
 * 格式化金额,千位符
 * @{num} Number 金额
 * @{decimal} 小数位数，默认两位
 * @return {string} 格式化字符串
 */
export const currency = function (num, decimal = 2) {
  var n = Number(num)
  var parts

  if (!isNaN(n)) {
    n = Number(num).toFixed(decimal)

    parts = n.split('.')

    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (decimal ? '.' : '') + (parts[1] || '')
  }

  return num
}
