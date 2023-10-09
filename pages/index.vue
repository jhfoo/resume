<template>
  <q-card class="MainCard row" flat>
      <div class="col-md-8 col-sm-16">
        <q-card-section class="">
          <div class="text-h6">Hello, World</div>
          <p>
            This site is the summation of my perspectives working in technology since graduation in 1998. 
          </p>
          <p>
            I witnessed the .com bubble burst in 2000, the rise of mobile as dominant prevalent interface, 
            prevalance of micro sensors and computer (IoT), and the emergence of cloud technologies. As 
            with many others I picked up new skills, unlearnt some, and stayed curious about the next 
            disruptive tech. 
          </p>
          <p>
            My career is best described in 2 phases: Before and During (my time in the United States).
          </p>
          <p>
            BEFORE coming to the States, I spent more than 10 years as a software developer in various 
            startups. Researched 3G and IPv6 back in 1999 with Deutsche Telekom. Wrote learning portals 
            serving over 200 schools with Perl. Built on-premise enterprise Cisco-integrated software 
            used by the likes of BP, Barclays, and Sime Darby using C# and Javascript. The culmuination 
            of my technical experience was the deployment of a massive data discovery tool for a national 
            agency; details of which cannot be elaborated.
          </p>
          <p>
            DURING my time in the States, my career took a more focused path. I straddled between program
            and product management in various companies within the Developer Excellence domain, helping 
            developers navigate new technologies and processes brought on by cloud adoption; known also 
            as Technology Transformation. At its height I lead a 200-engineer initiative to productize
            a cloud serivces framework enabling developers more autonomy and transparency over services
            they care about (databases), while simplifying complexities of elastic compute (kubernetes).  
          </p>
          <p>
            If my skills are what you're looking for, let's talk.
          </p>
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
  </q-card>
</template>

<style scoped>
.MainCard {
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
}
</style>

<script setup>
import { useNavigation } from '@/stores/navigation'
const SiteNavigation = useNavigation()

SiteNavigation.title = 'Online Resume of Foo, Ji-Haw'
console.log(`Title: ${SiteNavigation.title}`)

const KeyEvents = [{
  company: 'NexLabs',
  year: '2012',
  description: 'Designed and project-managed bespoke discover-process of large, unstructured data under the Trendicate product family for a national agency.',
}, {
  company: 'Amazon',
  year: '2014',
  description: 'Launched Prime Same Day in US and 4 international marketplaces.',
}, {
  company: 'Citibank',
  year: '2017',
  description: 'Lead 3 engineering teams to adopt Agile methodologies, and deliver with increased velocity.',
}, {
  company: 'Wayfair',
  year: '2023',
  description: 'Lead a 200-engineering initiative to improve cloud-native application infrastructure, increasing developer satisfaction and productivity while providing piercable abstractions.',
}]
</script>
