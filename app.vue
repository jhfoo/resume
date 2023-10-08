<template>
  <q-layout view="lHh LpR fFf">

    <q-header class="bg-primary text-black bg-transparent">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          {{SiteNavigation.title}}
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <LeftDrawer/>
    <q-page-container>
      <NuxtLayout/>
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { useNavigation } from '@/stores/navigation'

const SiteNavigation = useNavigation()

console.log(`Title: ${SiteNavigation.title}`)

function toggleLeftDrawer() {
  SiteNavigation.isShowDrawer = !SiteNavigation.isShowDrawer
  console.log(`isShowDrawer: ${SiteNavigation.isShowDrawer}`)
}
</script>
