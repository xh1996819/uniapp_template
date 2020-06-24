import Vue from 'vue'
import Router from 'uni-simple-router'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/pages/index/index',
            name: 'index'
        },
        {
            path: '/pages/index/notice',
            name: 'notice'
        },
        {
            path: '/pages/center/index',
            name: 'center',
            H5Params: {
                H5Name: '' //使用一个临时变量来存储
            },
            beforeEnter: (to, from, next) => {
                to.H5Params.H5Name = to.query.name
                next();
            }
        },
        {
            path: '/pages/login/index',
            name: 'login'
        }
    ]
})

// 白名单
const whiteList = ['login', 'index']

//全局路由前置守卫
router.beforeEach((to, from, next) => {
    if (whiteList.includes(to.name)) {
        next()
    } else {
        const tokenStr = uni.getStorageSync('token')
        if (!tokenStr) {
            next({ name: 'login', NAVTYPE: 'push' })
        } else {
            next()
        }
    }
})
// 全局路由后置守卫
router.afterEach((to, from) => {
})
export default router;