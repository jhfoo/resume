<template>
  <div class="row">
    <div class="col-md-8 col-sm-16">
      <q-card-section class="">
        <ContentDoc path="/experiences"/>
      </q-card-section>
    </div>
    <div class="col-4 gt-sm">
      <q-timeline color="secondary">
        <div class="text-h6 text-secondary">Career Highlights</div>

        <q-timeline-entry v-for="event in KeyEvents" :title="event.company" :subtitle="event.year">
          <div>{{event.description}}</div>
        </q-timeline-entry>
      </q-timeline>
    </div>
  </div>
</template>

<style scoped>
:deep(h1) {
  font-size: 3rem;
  line-height: 3.5rem;
}
</style>

<script setup>
// import { useNavigation } from '@/stores/navigation'
// const SiteNavigation = useNavigation()
// SiteNavigation.title = 'Online Resume of Foo, Ji-Haw'

const KeyEvents = [{
  company: 'Wayfair',
  year: '2022',
  description: 'Lead a 200-engineering initiative to improve cloud-native application infrastructure, increasing developer satisfaction and productivity with piercable abstractions.',
}, {
  company: 'Citibank',
  year: '2018',
  description: 'Lead 3 engineering teams to adopt Agile methodologies, and deliver with increased velocity and predictability.',
}, {
  company: 'Amazon',
  year: '2014',
  description: 'Launched Prime Same Day in US and 4 international marketplaces.',
}, {
  company: 'NexLabs',
  year: '2012',
  description: 'Designed and project-managed bespoke discover-process of large, unstructured data for a national agency.',
}]
</script>
