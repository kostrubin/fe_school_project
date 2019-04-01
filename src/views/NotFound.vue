<template lang="pug">
  div
    page-header
    div#content
      h1 404
      p It seems that you are lost! Try to find a way on the &nbsp;
        router-link(to='/map') Map
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
  margin-top: 80px;
}
#content a {
  text-decoration: underline;
  color: rgb(10, 21, 231) ;
}
</style>
