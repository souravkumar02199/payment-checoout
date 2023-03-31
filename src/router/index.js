import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '../views/TodoList.vue'
import ListAll from '../components/ListAll.vue'
import EditDelete from '../components/EditDelete.vue'
import Edit from '../components/Edit.vue'
import Chat from '../components/Chat.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'TodoList',
    component: TodoList
},
 {
    path: '/chat',
    name: 'Chat',
    component: Chat
 },
 {
    path: '/editDelete',
    name: 'EditDelete',
    component: EditDelete
 },
 {
    path: '/edit/:id',
    name: 'edit',
    component: Edit
 }
]

const router = new VueRouter({
    routes
})

export default router