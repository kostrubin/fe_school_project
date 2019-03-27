<template lang="pug">
    div
        header
            nav
                ul
                    li
                        a(href='/map') Map
                    li
                        a(href='/stations') Stations
                    li
                        a(href='/Routes') Routes
            input(type="search")
            img
            v-gravatar(email="somebody@somewhere.com")
</template>

<script>
export default {
    name: 'PageHeader'
  }
</script>

<style lang="scss">
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 40px;
        padding: 0;
        margin: 0;
        background: url(../assets/bars-solid.svg) no-repeat,
                    rgba(212, 161, 212, .8);
    }
    header nav ul {
        display: flex;
        list-style: none;
    }
    header a {
        margin: 0 20px;
        text-decoration: none;
    }
</style>
