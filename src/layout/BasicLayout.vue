<script setup>
import TheSidebar from './TheSidebar.vue'
import TheHeader from './TheHeader.vue'
import SearchFlight from './SearchFlight.vue'
import { RouterView } from 'vue-router'
import { ref } from '@vue/reactivity'
const sidebarActive = ref(true)

</script>
<template>
  <div class="relative">
  <div class="fixed bg-home-gradient w-screen left-auto right-auto h-96 z-[1]">
  <div class=" max-w-container mx-auto">
    <img src="../assets/images/img-bg-header-clouds.png" class="fixed -top-36 left-auto right-auto z-10 object-cover" alt="img of clouds">
  </div>
  </div>
    <div class="max-w-container pl-10 mx-auto relative flex justify-between top-8">
      <the-sidebar @chechingWidth="sidebarActive = !sidebarActive" />
      <div :class="`min-w-main duration-500 px-10 ${sidebarActive ? 'max-w-main' :'w-[1280px]'}`">
        <the-header />
        <search-flight class="sticky top-[120px]" :sidebarActive='sidebarActive' />
      <div class="">
        <slot></slot>
        <router-view></router-view>
      </div>
    </div>
    </div>
  </div>
</template>
<style lang="scss">

</style>