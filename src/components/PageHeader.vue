<template lang="pug">
  div#header
    v-toolbar
      v-toolbar-items.hidden-sm-and-down
        v-btn(flat)
          router-link(to="/map") Map
        v-btn(flat)
          router-link(to="/stations") Stations
        v-btn(flat)
          router-link(to="/routes") Routes
      v-spacer
      v-text-field(hide-details prepend-icon="search" single-line)
      v-spacer
      v-spacer
      v-avatar
        img(src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John")
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style lang="scss">
#header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999999;
}
a {
  color: rgb(44, 62, 80);
  text-decoration: none;
}
</style>
