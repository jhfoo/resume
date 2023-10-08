<template>
  This is the index page
</template>

<script setup>
import { useNavigation } from '@/stores/navigation'
const SiteNavigation = useNavigation()

SiteNavigation.title = 'Online Resume of Foo, Ji-Haw'
console.log(`Title: ${SiteNavigation.title}`)

</script>
