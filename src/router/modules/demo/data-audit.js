import Layout from '@/layout/index'

const dataAuditRouter =
  {
    path: '/demo/data-audit',
    redirect: '/demo/data-audit/index',
    hidden: false,
    component: Layout,
    name: 'DemoDataAudit',
    children: [
      {
        path: 'index',
        component: () => import('@/views/demo/data-audit/index.vue'),
        name: 'DataAuditIndex',
        meta: { title: 'demo.dataAudit.title', icon: '', affix: false, roles: ['admin'] }
      }
    ]
  }

export default dataAuditRouter
