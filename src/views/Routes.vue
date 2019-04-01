<template lang="pug">
  div
    page-header
    div#content
      h1 Routes
</template>

<script>
import PageHeader from '@/components/PageHeader'

export default {
  name: 'Routes',
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
