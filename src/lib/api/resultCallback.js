const resultCallback = (vm, data) => {
  return new Promise((resolve, reject) => {
    // 暂时兼容不规范接口
    if (data) {
      if (data.code === 0 || data.status === 0) {
        resolve(data['data'] || true)
        return
      }
      resolve(data)
    } else {
      const option = { type: 'error', title: `Error:${data.code || data.status}`, message: data.msg || data.message }
      vm.$notify ? vm.$notify(option) : console.log(option)
      resolve(false)
    }
  })
}

export default resultCallback
