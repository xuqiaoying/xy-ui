import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Doc from './views/Doc.vue'
import Switch from './views/switch.vue'
import Button from './views/button.vue'
import Dialog from './views/dialog.vue'
import Tabs from './views/tabs.vue'
import DocDemo from './views/DocDemo.vue'

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
                { path: "", component: DocDemo }, // doc默认页面
                {
                    path: 'switch',
                    component: Switch
                },
                {
                    path: 'button',
                    component: Button
                },
                {
                    path: 'tabs',
                    component: Tabs
                },
                {
                    path: 'dialog',
                    component: Dialog
                }
            ]
        }
    ]
})

router.afterEach((to, from) => {
    // to and from are both route objects.
    console.log('路由切换了');
    
})