
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  {
    path: '/register',
    component: () => import('layouts/LayoutInit.vue'),
    children: [
      { path: '', component: () => import('pages/Register.vue') }
    ]
  },

  {
    path: '/shop',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Shop.vue') }
    ]
  },

  {
    path: '/LogIn',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LogIn.vue') }
    ]
  },

  {
    path: '/SignIn',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SignIn.vue') }
    ]
  },

  {
    path: '/Account',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Account.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
