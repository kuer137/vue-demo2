import list from '@/components/HelloWorld'
import HelloWorld from '@/components/lib/HelloFromVux'
import confirm from '@/components/lib/confirm'
import form from '@/components/lib/form'
import swiper from '@/components/lib/swiper'

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
  },
  {
    path: '/form',
    name: 'form',
    component: form
  },
  {
    path: '/swiper',
    name: 'swiper',
    component: swiper
  }
]
