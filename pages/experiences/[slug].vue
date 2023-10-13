<template>
  <div class="row">
    <div class="col-md-8 col-sm-16">
      <q-card-section class="">
        <ContentDoc v-slot="{ doc }"/>
      </q-card-section>
    </div>
    <div class="col-4 gt-sm">
      <div class="text-h6 text-secondary">{{doc.LinkGroupTitle}}</div>
      <q-list separator>
        <q-item v-for="item in sidebar" :href="item.url" target="_blank"  clickable v-ripple>
          <q-item-section>
            <q-item-label>{{item.title}}</q-item-label>
            <q-item-label caption>{{item.domain}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<style scoped>
:deep(h1) {
  font-size: 3rem;
  line-height: 3.5rem;
  margin-top: 0;
}
:deep(h2) {
  font-size: 2rem;
  line-height: 2.25rem;
  margin-bottom: 0;
}
:deep(h2 a) {
  text-decoration: none;
  color: #000;
}
:deep(h2 a:hover) {
  text-decoration: underline;
}
:deep(h3) {
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 0;
}
:deep(h3 a) {
  text-decoration: none;
  color: #000;
}
:deep(h3 a:hover) {
  text-decoration: underline;
}
</style>

<script setup>
  const route = useRoute()
  console.log(route.params.slug)
  const DocPath = 'experiences/' + route.params.slug
  // const DocPath = '/experiences/cloud-native'
  console.log(`DocPath: ${DocPath}`)
  let sidebar = ref([])
  const doc = await queryContent(DocPath).findOne()

  console.log('Doc')
  console.log(doc)

  for (let i = 1; i <= 10; i++) {
    if (`LinkTitle${i}` in doc) {
      console.log(`LinkTitle${i}`)
      const rec = {
        title: doc[`LinkTitle${i}`],
        url: doc[`LinkUrl${i}`],
      }
      const matches = rec.url.match(/\/\/(.+?)\//)
      rec.domain = matches[1]
      // console.log(matches)
      sidebar.value.push(rec)
    }
  }
  console.log(sidebar.value) 

  const KeyEvents = []
</script>