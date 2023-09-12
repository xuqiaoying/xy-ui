import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './views/switch.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {
            path:'/',
            component: Home
        },
        {
            path: '/doc',
            component: Doc,
            children: [
                {
                    path: 'switch',
                    component: Switch
                }
            ]
        }
    ]
})

router.afterEach((to, from) => {
    // to and from are both route objects.
    console.log('路由切换了');
    
})