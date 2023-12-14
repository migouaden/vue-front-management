import { createRouter, createWebHistory } from 'vue-router'
import ProductView from '../views/Product/ProductView.vue'
import ProductCreate from '../views/Product/ProductCreate.vue'
import ProductEdit from '../views/Product/ProductEdit.vue'
import ArticleView from '../views/Article/ArticleView.vue'
import ArticleCreate from '../views/Article/ArticleCreate.vue'
import ArticleEdit from '../views/Article/ArticleEdit.vue'
import UserView from '../views/User/UserView.vue'
import UserCreate from '../views/User/UserCreate.vue'
import LoginView from '../views/login.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'user',
      component: UserView
    },
    {
      path: '/create/user',
      name: 'createuser',
      component: UserCreate
    },
    {
      path: '/products',
      name: 'product',
      component: ProductView
    },
    {
      path: '/product/create',
      name: 'createproduct',
      component: ProductCreate
    },
    {
      path: '/product/:id/edit',
      name: 'editproduct',
      component: ProductEdit
    },
    {
      path: '/articles',
      name: 'article',
      component: ArticleView

    },
    {
      path: '/article/create',
      name: 'createarticle',
      component: ArticleCreate

    },
    {
      path: '/article/:id/edit',
      name: 'editarticle',
      component: ArticleEdit

    },
  ]
})

export default router
