<template>
  <Navbar/>
  <router-view id="Content" >
  </router-view>
</template>

<script>
import Navbar from "./components/Top-Navbar"
export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

