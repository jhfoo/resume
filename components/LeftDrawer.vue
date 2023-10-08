<template>
  <q-drawer show-if-above v-model="SiteNavigation.isShowDrawer" side="left">
    <q-img src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
      <div class="absolute-bottom bg-transparent">
        <q-avatar size="56px" class="q-mb-sm">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
        <div class="text-weight-bold">Foo, Ji-Haw</div>
        <div>foojihaw@</div>
      </div>
    </q-img>

    <q-list padding class="text-primary">
      <q-item v-for="item in menu"
        clickable
        v-ripple
        :active="link === 'outbox'"
        @click="link = 'outbox'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="send" />
        </q-item-section>

        <q-item-section>{{item.name}}</q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script setup>
import { useNavigation } from '@/stores/navigation'
const SiteNavigation = useNavigation()

const menu = [
  {
    name: 'Experiences',
  },
  {
    name: 'Connect',
  },
]
</script>
