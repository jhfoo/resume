<template>
  <q-card class="MainCard row" flat>
      <div class="col-md-8 col-sm-16 q-pr-md">
        <ContentDoc path="/connect"/>
      </div>
      <div class="col-4 gt-sm">
        <q-timeline color="secondary">
          <div class="text-h6 text-secondary">Public Profiles</div>

          <q-timeline-entry v-for="event in KeyEvents" :title="event.company" icon="language">
            <template v-slot:title>
              <a :href="event.url" target="_blank">{{event.company}}</a>
            </template>
            <div>{{event.description}}</div>
          </q-timeline-entry>
        </q-timeline>
      </div>
  </q-card>
</template>

<style scoped>
:deep(h1) {
  font-size: 1.25rem;
  line-height: 2rem;
}
.MainCard {
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
}
:deep(.q-timeline__subtitle) {
  padding-top: 4px;
  margin-bottom: 0;
}
:deep(.q-timeline__title) {
  margin-bottom: 4px;
}
</style>

<script setup>
import { useNavigation } from '@/stores/navigation'
const SiteNavigation = useNavigation()

SiteNavigation.title = 'Let\s Talk'
console.log(`Title: ${SiteNavigation.title}`)

const KeyEvents = [{
  company: 'Linkedin',
  url: 'https://www.linkedin.com/in/foojihaw/',
  description: 'My professional profile',
}, {
  company: 'Medium',
  url: 'https://medium.com/@jihawfoo',
  description: 'Published a few articles before this site.',
}, {
  company: 'GitHub',
  url: 'https://github.com/jhfoo',
  description: 'My source codes!',
}, {
  company: 'ihazcodez',
  url: 'https://ihazcodez.kungfoo.info',
  description: 'My tech blog.',
}]
</script>
