import Vue from 'vue'

const files = require.context('.', false, /\.js$/)

let api = {}

files.keys().forEach(key => {
    if (key === './index.js') return
    api = Object.assign({}, api, files(key))

})

Vue.prototype.$api = api

export default api
