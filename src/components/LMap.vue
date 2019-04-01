<template lang="pug">
  div#mymap
</template>

<script>
import 'leaflet/dist/leaflet.css'
import LMap from 'leaflet'

export default {
  name: 'LMap',
  methods: {
    createMapInstance () {
      const mymap = LMap.map('mymap').setView([59.939, 30.315], 13)
      LMap.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1Ijoia29zdHJ1YmluIiwiYSI6ImNqdHQyN21kdzA0cDY0NHF0MXJpY2dkc3kifQ.DaY6thPxlKF8TO3ugRl6Aw'
      }).addTo(mymap)

      return mymap
    },
    renderMap () {
      this.createMapInstance()
    }
  },
  mounted () {
    this.renderMap()
  }
}

</script>

<style lang="scss">
#mymap {
  position: absolute;
  margin-top: 64px;
  height: calc(100vh - 64px);
  width: 100%;
}
</style>
