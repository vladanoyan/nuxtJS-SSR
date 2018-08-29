<template>
    <div>
        <app-header/>
        <nuxt/>
        <app-footer/>
    </div>
</template>

<script>
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"

export default {
  components: {
    AppHeader,
    AppFooter
  },
  mounted () {
    window.onscroll = () => {
      this.$store.commit("SET_PROP", {
        key: "scrollTop",
        value: window.scrollY
      })
    }
  }
}
</script>
