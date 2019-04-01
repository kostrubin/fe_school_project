<template lang="pug">
  div
    page-header
    div#content
      h1 404
</template>

<script>
import PageHeader from '@/components/PageHeader'

export default {
  name: 'NotFound',
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
