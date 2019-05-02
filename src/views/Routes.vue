<template lang="pug">
  div
    page-header
    div#content
      h1 Routes
        v-app#inspire
          v-data-table.elevation-1(:headers="headers" :items="desserts")
            template(v-slot:items="props")
              td {{ props.item.name }}
              td.text-xs-right {{ props.item.calories }}
              td.text-xs-right {{ props.item.fat }}
              td.text-xs-right {{ props.item.carbs }}
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
        { text: '№', align: 'center', sortable: false, value: 'name' },
        { text: 'Routes', align: 'center', value: 'calories' },
        { text: 'Time', align: 'center', value: 'fat' },
        { text: 'Favorite', align: 'center', value: 'carbs' }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65
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
