import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

// ページコンポーネントをインポートする
import PhotoList from './pages/PhotoList.vue'
import Login from './pages/Login.vue'

// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter)

// パスとコンポーネントのマッピング
const routes: RouteConfig[] = [
    {
        path: '/',
        component: PhotoList
    },
    {
        path: '/login',
        component: Login,
        beforeEnter (to, from, next) {
            if (Vue.prototype.$store.auth.check) {
                next('/')
            } else {
                next()
            }
        }
    }
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
  mode: 'history',
  routes
})

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router
