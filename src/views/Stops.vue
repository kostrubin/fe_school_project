<template lang="pug">
  div
    page-header
    div#content
      h1 Stops
        v-app#inspire
          v-toolbar(flat="" color="white")
            v-spacer
            v-dialog(v-model="dialog" max-width="500px")
              template(v-slot:activator="{ on }")
                v-btn.mb-2(color="primary" dark="" v-on="on") New Stop
              v-card
                v-card-title
                  span.headline {{ formTitle }}
                v-card-text
                  v-container(grid-list-md="")
                    v-layout(wrap="")
                      v-flex(xs12="" sm6="" md4="")
                        v-text-field(v-model="editedItem.name" label="Stop name")
                      v-flex(xs12="" sm6="" md4="")
                        v-text-field(v-model="editedItem.routes" label="Routes")
                      v-flex(xs12="" sm6="" md4="")
                        v-text-field(v-model="editedItem.time" label="Time")
                v-card-actions
                  v-spacer
                  v-btn(color="blue darken-1" flat="" @click="close") Cancel
                  v-btn(color="blue darken-1" flat="" @click="save") Save
          v-data-table.elevation-1(:headers="headers" :items="stops")
            template(v-slot:items="props")
              td {{ props.item.name }}
              td.text-xs-right {{ props.item.routes }}
              td.text-xs-right {{ props.item.time }}
              td.text-xs-right {{ props.item.favorite }}
              td.justify-center.layout.px-0
                v-icon.mr-2(small="" @click="editItem(props.item)")
                  | edit
                v-icon(small="" @click="deleteItem(props.item)")
                  | delete
            template(v-slot:no-data="")
              v-btn(color="primary" @click="initialize") Reset
</template>

<script>
import PageHeader from '@/components/PageHeader'

export default {
  name: 'Stops',
  components: {
    PageHeader
  },
  data: () => ({
    dialog: false,
    headers: [
      { text: 'Name', align: 'center', value: 'name' },
      { text: 'Routes', align: 'center', value: 'routes' },
      { text: 'Time', align: 'center', value: 'time' },
      { text: 'Favorite', align: 'center', value: 'favorite' }
    ],
    stops: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      routes: 0,
      time: 0
    },
    defaultItem: {
      name: '',
      routes: 0,
      time: 0
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Stop' : 'Edit Stop'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.stops = [
        {
          name: 'Avtovo',
          routes: 37,
          time: '6:00, 6:20, 6:40, 7:00',
          favorite: false
        },
        {
          name: 'Begovaya',
          routes: 71,
          time: '6:00, 6:20, 6:40, 7:00',
          favorite: false
        },
        {
          name: 'Bronka',
          routes: '37, 94',
          time: '6:00, 6:20, 6:40, 7:00',
          favorite: false
        },
        {
          name: 'Gorskaya',
          routes: '71, 94',
          time: '6:00, 6:20, 6:40, 7:00',
          favorite: false
        },
        {
          name: 'Komarovo',
          routes: 94,
          time: '6:00, 6:20, 6:40, 7:00',
          favorite: false
        },
        {
          name: 'Kronshtadt',
          routes: 94,
          time: '6:00, 6:20, 6:40, 7:00',
          favorite: false
        },
        {
          name: 'Lakhta',
          routes: 71,
          time: '6:00, 6:20, 6:40, 7:00',
          favorite: false
        },
        {
          name: 'Lisiy Nos',
          routes: 71,
          time: '6:00, 6:20, 6:40, 7:00',
          favorite: false
        },
        {
          name: 'Lomonosov',
          routes: 37,
          time: '6:00, 6:20, 6:40, 7:00',
          favorite: false
        },
        {
          name: 'Petergof',
          routes: 37,
          time: '6:00, 6:20, 6:40, 7:00',
          favorite: false
        },
        {
          name: 'Repino',
          routes: 94,
          time: '6:00, 6:20, 6:40, 7:00',
          favorite: false
        },
        {
          name: 'Sestroretsk',
          routes: 94,
          time: '6:00, 6:20, 6:40, 7:00',
          favorite: false
        },
        {
          name: 'Strelna',
          routes: 37,
          time: '6:00, 6:20, 6:40, 7:00',
          favorite: false
        }
      ]
    },

    editItem (item) {
      this.editedIndex = this.stops.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.stops.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.stops.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.stops[this.editedIndex], this.editedItem)
      } else {
        this.stops.push(this.editedItem)
      }
      this.close()
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
