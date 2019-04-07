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
      const mymap = LMap.map('mymap').setView([59.995, 30.115], 10)
      LMap.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1Ijoia29zdHJ1YmluIiwiYSI6ImNqdHQyN21kdzA0cDY0NHF0MXJpY2dkc3kifQ.DaY6thPxlKF8TO3ugRl6Aw'
      }).addTo(mymap)

      const icon = LMap.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-2x.png',
        iconSize: [25, 41]
      })

      const stops = [
        LMap.marker([59.989, 30.202], {icon: icon, name: 'Begovaya'}),
        LMap.marker([59.994, 30.154], {icon: icon, name: 'Lakhta'}),
        LMap.marker([60.010, 30.024], {icon: icon, name: 'Lisiy Nos'}),
        LMap.marker([60.039, 29.977], {icon: icon, name: 'Gorskaya'}),
        LMap.marker([60.084, 29.957], {icon: icon, name: 'Sestroretsk'}),
        LMap.marker([60.166, 29.864], {icon: icon, name: 'Repino'}),
        LMap.marker([60.174, 29.803], {icon: icon, name: 'Komarovo'}),
        LMap.marker([59.868, 30.260], {icon: icon, name: 'Avtovo'}),
        LMap.marker([59.852, 30.053], {icon: icon, name: 'Strelna'}),
        LMap.marker([59.880, 29.908], {icon: icon, name: 'Petergof'}),
        LMap.marker([59.915, 29.773], {icon: icon, name: 'Lomonosov'}),
        LMap.marker([59.928, 29.657], {icon: icon, name: 'Bronka'}),
        LMap.marker([60.011, 29.726], {icon: icon, name: 'Kronshtadt'})
      ]

      stops.forEach(element => {
        element.addTo(mymap)
        element.bindPopup('<b>' + element.options.name + '</b>').openPopup()
      })

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
