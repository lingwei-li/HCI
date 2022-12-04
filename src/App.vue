<template>
  <z-canvas :views='$options.components'></z-canvas>
</template>
<script>
// TO SET UP VUE-ROUTER UNCOMMENT THE FOLLOWING LINES
// import Vue from 'vue'
// import Router from 'vue-router'
// Vue.use(Router)
// const router = new Router()
export default {
  components: {
    tv: () => import('./views/tv'),
    light: () => import('./views/light'),
    ac: () => import('./views/ac'),
    hifi: () => import('./views/hifi'),
    living: () => import('./views/living'),
    kitchen: () => import('./views/kitchen'),
    refrigerator: () => import('./views/refrigerator'),
    bath: () => import('./views/bath'),
    water_heater: () => import('./views/water_heater'),
    monitors: () => import('./views/monitors'),
    doors: () => import('./views/doors'),
    search: () => import('./views/search'),
    device: () => import('./views/device'),
    home: () => import('./views/home'),
    settings: () => import('./views/settings'),
    rooms: () => import('./views/rooms'),
    devices: () => import('./views/devices'),
    status: () => import('./views/status'),
    scenes: () => import('./views/scenes'),
    family: () => import('./views/family'),
    logs: () => import('./views/logs'),
    warnings: () => import('./views/warnings')
  },
  mounted() {
    this.$zircle.config({
      mode: 'full',
      style: {
        theme: 'black',
        mode: 'dark'
      },
      debug: true
    })
    this.$zircle.setView('home')
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');
@import url('https://use.fontawesome.com/releases/v5.1.0/css/all.css');
</style>
