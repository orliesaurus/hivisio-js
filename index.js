import request from 'request-promise-native'

class Hivisio {
  constructor(uid, secret) {
    this.uid = uid
    this.secret = secret
  }

  _url(tid) {
    return `https://hivis.io/api/${this.uid}/${tid}`
  }

  render (tid, params = {}, options = {}) {
    return request({
      method: 'POST',
      uri: this._url(tid),
      body: {
        secret: this.secret,
        params,
        options
      },
      json: true
    })
  }

}

export default Hivisio
