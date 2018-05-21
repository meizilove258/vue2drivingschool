function fetch (params) {
  return new Promise((resolve, reject) => {
    params.jsonp ? jsonp(params) : jso(params)
    function jso (params) {
      params = params || {}
      params.method = params.method || 'GET'
      params.data = params.data || {}
      params.data = formParams(params.data)
      var xhr = null
      try {
        xhr = new XMLHttpRequest()
      } catch (e) {
        throw new Error('浏览器不支持')
      }
      if (params.method === 'GET') {
        xhr.open(params.method, params.url + '?' + params.data)
        xhr.send(null)
      }
      if (params.method === 'POST') {
        xhr.open(params.method, params.url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-unlencoded;charset=UTF-8')
        xhr.send(params.data)
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(JSON.parse(xhr.response))
        }
      }
    }
    function jsonp (params) {
      var callbackName = params.jsonp
      params.data = params.data || {}
      params.data['callback'] = callbackName
      params.data = formParams(params.data)
      var head = document.getElementsByTagName('head')[0]
      var script = document.createElement('script')
      head.appendChild(script)
      window[callbackName] = function (res) {
        head.removeChild(script)
        resolve(res)
        window[callbackName] = null
      }
      script.src = params.url + '?' + params.data
    }
    function formParams (data) {
      var arr = []
      for (var name in data) {
        arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))
      }
      arr.push('v=' + random())
      return arr.join('&')
    }
    function random () {
      return Math.floor(Math.random() * 1000 + 500)
    }
  })
}

export default {
  getData () {
    return fetch({
      method: 'GET',
      url: 'http://localhost:3000/test/getData',
      data: {}
    })
  },
  getData2 () {
    return fetch({
      jsonp: 'jsonpcallback',
      url: 'http://localhost:3000/test/getData2'
    })
  }
}
