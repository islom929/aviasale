<script setup>
import TheSidebar from './TheSidebar.vue'
import TheHeader from './TheHeader.vue'
import SearchFlight from './SearchFlight.vue'
import { RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
const sidebarActive = ref(true)

const marginTopChanging = ref(0)

const scrollTop = () => {
  if(window.scrollY < 400) {
    marginTopChanging.value = Number(Math.round(window.scrollY))
  }

  console.log(window.scrollY)
}

onMounted(() => {
  document.addEventListener('scroll', scrollTop)
})

</script>
<template>
  <div class="relative">
  <div :class="`fixed bg-home-gradient w-screen duration-1000 left-auto right-auto  z-[1] ${marginTopChanging < 50 ? 'h-96' : 'h-[205px]'}`">
  <div class=" max-w-container mx-auto">
    <img src="../assets/images/img-bg-header-clouds.png" class="fixed -top-36 left-auto right-auto z-10 object-cover" alt="img of clouds">
  </div>
  </div>
    <div class="max-w-container pl-10 mx-auto relative flex justify-between top-8">
      <the-sidebar @chechingWidth="sidebarActive = !sidebarActive" />
      <div :class="`min-w-main duration-500 px-10 ${sidebarActive ? 'max-w-main' :'w-[1280px]'}`">
        <the-header />
        <search-flight class="sticky top-[100px]"
          :sidebarActive='marginTopChanging && sidebarActive ?  !sidebarActive : sidebarActive'
        />
      <div class="">
        <slot />
        <router-view></router-view>
      </div>
    </div>
    </div>
  </div>
</template>
<style lang="scss">

</style>