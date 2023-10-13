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

    <!-- :active="link === 'outbox'"
        @click="link = 'outbox'"
        active-class="my-menu-link" -->
    <q-list padding class="">
      <template v-for="item in menu">
        <q-item  :to="item.url" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="send" />
          </q-item-section>

          <q-item-section>{{item.name}}</q-item-section>
        </q-item>

        <q-item v-if="item.name === 'Experiences'" v-for="item2 in docs" :to="item2.path" clickable v-ripple dense>
          <q-item-section avatar>
          </q-item-section>

          <q-item-section><span class="q-ml-sm">{{item2.title}}</span></q-item-section>
        </q-item>
      </template>

    </q-list>
  </q-drawer>
</template>

<script setup>
import { useNavigation } from '@/stores/navigation'
const SiteNavigation = useNavigation()

const docs = (await queryContent('/experiences/').find()).map((doc) => {
  return {
    title: doc.title,
    path: doc._path,
  }
})
console.log(docs)


const menu = [{
  name: 'Home',
  url: '/',
}, {
  name: 'Experiences',
  url: '/experiences',
}, {
  name: 'Connect',
  url: '/connect',
}]
</script>
