<template>
  <q-header class="bg-primary text-black bg-white">
    <q-toolbar>
      <q-btn class="lt-sm" dense flat round icon="menu" @click="toggleLeftDrawer" />

      <q-toolbar-title>
        {{SiteNavigation.title || 'Online Resume of Foo, Ji-Haw'}}
      </q-toolbar-title>

    </q-toolbar>
  </q-header>
</template>

<script setup>
import { useNavigation } from '@/stores/navigation'
const SiteNavigation = useNavigation()

function toggleLeftDrawer() {
  SiteNavigation.isShowDrawer = !SiteNavigation.isShowDrawer
  console.log(`isShowDrawer: ${SiteNavigation.isShowDrawer}`)
}
</script>
