<template lang="pug">
    div
      page-header
      div#content
        h1 Stations
</template>

<script>
import PageHeader from '@/components/PageHeader'

export default {
  name: 'Stations',
  components: {
    PageHeader
  }
}
</script>

<style lang="scss">
#content {
  margin-top: 64px;
}
</style>
