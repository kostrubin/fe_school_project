<template lang="pug">
  div
    page-header
    l-map
</template>

<script>
import PageHeader from '@/components/PageHeader'
import LMap from '@/components/LMap'

export default {
  name: 'Map',
  components: {
    PageHeader,
    LMap
  }
}

</script>

<style lang="scss">
</style>
