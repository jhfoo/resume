<template>
  <q-layout view="lHh LpR fFf">

    <q-header class="bg-primary text-black bg-transparent">
      <q-toolbar>
        <q-btn class="lt-sm" dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
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
