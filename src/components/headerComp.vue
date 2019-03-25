<template lang="pug">
    header
        input(type="search")
        img
        v-gravatar(email="somebody@somewhere.com")
</template>

<script>
export default {
    name: 'headerComp'
  }
</script>

<style lang="scss">
    header {
        width: 100%;
        height: 80px;
        background: url(../assets/bars-solid.svg) no-repeat,
                    red;
    }
</style>
