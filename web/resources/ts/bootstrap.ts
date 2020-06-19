import { getCookieValue } from './util'
import axios, { AxiosStatic } from 'axios'

declare global {
    interface Window {
        axios: AxiosStatic,
    }
}

window.axios = axios

// Ajaxリクエストであることを示すヘッダーを付与する
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

window.axios.interceptors.request.use(config => {
  // クッキーからトークンを取り出してヘッダーに添付する
  config.headers['X-XSRF-TOKEN'] = getCookieValue('XSRF-TOKEN')

  return config
})
