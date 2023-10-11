import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavigation = defineStore('navigation', () => {
  const isShowLeftDrawer = ref(true)
  const title = ref('Online Resume of Foo, Ji-Haw')
})