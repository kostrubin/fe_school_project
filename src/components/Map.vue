<template>
  <div>
    <PageHeader></PageHeader>
    <h1>Map</h1>
    <l-map ref="Map">
    </l-map>
  </div>
</template>

<script>
import PageHeader from './PageHeader.vue'

// export default {
//   name: 'Map',
//   components: {
//     PageHeader
//   }
// }
// var { LMap, LTileLayer, LMarker } = Vue2Leaflet

import {LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
  name: 'Map',
  components: {
      PageHeader,
      LMap,
      LTileLayer,
      LMarker
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.Map.mapObject.ANY_LEAFLET_MAP_METHOD();
    })
  }
  }

</script>

<style lang="scss">
html, body, #app {
  height: 100%;
  margin: 0;
}
</style>
