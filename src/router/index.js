import list from '@/components/HelloWorld'
import HelloWorld from '@/components/lib/HelloFromVux'
import confirm from '@/components/lib/confirm'

export default [
  {
    path: '/',
    component: list
  },
  {
    path: '/checklist',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/confirm',
    name: 'confirm',
    component: confirm
  }
]
