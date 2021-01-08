import Layout from '@/layout/index'

const checkResultRouter =
  {
    path: '/demo/check-result',
    redirect: '/demo/check-result/index',
    hidden: false,
    component: Layout,
    name: 'DemoCheckResult',
    children: [
      {
        path: 'index',
        component: () => import('@/views/demo/check-result/index.vue'),
        name: 'CheckResultIndex',
        meta: { title: 'demo.checkResult.title', icon: '', affix: false, roles: ['admin'] }
      }
    ]
  }

export default checkResultRouter
