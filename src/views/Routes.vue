<template lang="pug">
  div
    page-header
    div#content
      h1 Routes
        v-app#inspire
          v-data-table.elevation-1(:headers="headers" :items="routes")
            template(v-slot:items="props")
              td {{ props.item.name }}
              td.text-xs-right {{ props.item.stops.title }}
              td.text-xs-right {{ props.item.stops.time }}
            template(v-slot:pageText="props")
              | Lignes {{ props.pageStart }} - {{ props.pageStop }} de {{ props.itemsLength }}
</template>

<script>
import PageHeader from '@/components/PageHeader'

export default {
  name: 'Routes',
  components: {
    PageHeader
  },
  data () {
    return {
      headers: [
        { text: '№', align: 'center', value: 'name' },
        { text: 'Stops', align: 'center', value: 'stops' },
        { text: 'Time', align: 'center', value: 'stops' }
      ],
      routes: [
        {
          name: '37',
          stops: [
            {
              title: 'Avtovo',
              time: '6:00'
            },
            {
              title: 'Bronka',
              time: '6:00'
            },
            {
              title: 'Strelna',
              time: '6:00'
            }
          ]
        },
        {
          name: '71',
          stops: 159,
          time: 6.0
        },
        {
          name: '94',
          stops: 159,
          time: 6.0
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#content {
  width: 80%;
  margin: 80px auto;
}
a {
  color: rgb(44, 62, 80) !important;
}
h1 {
  margin: 20px 0;
}
.application--wrap {
  min-height: 0;
}
</style>
