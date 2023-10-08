import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavigation = defineStore('navigation', () => {
  const isShowLeftDrawer = ref(true)
  const title = ref('Hello World')
})