<script setup>
import { RouterLink } from 'vue-router'
import { ref, defineEmits } from 'vue'

  const sidebarActive = ref(true)
  if (window.innerWidth < 1400) {
    sidebarActive.value = !sidebarActive.value
  }

  const emit = defineEmits(['chechingWidth'])
</script>

<template>
  <div :class="`bg-sidebar-gradient h-sidebar duration-500 rounded-xl sticky z-10 py-6 top-8 left-10 ${sidebarActive ? 'px-7 w-60' : 'flex flex-col items-center justify-center w-20 overflow-hidden'}`">
    <div class="flex justify-between items-center">
        <router-link
          class="transition-all ease-in"
          v-show="sidebarActive"
          to="/">
          <svg-icon name='logo' :fil="'#fff'" />
        </router-link>
      <button @click="() => {
        emit('chechingWidth')
        sidebarActive = !sidebarActive
        }">
        <svg-icon name='burger' :fil="'#fff'" />
      </button>
    </div>

    <div class="mt-20 text-white text-xs font-semibold flex flex-col transition-all ease-in">
      <router-link
        to="/"
        active-class="bg-sidebar-active"
        :class="`m-0.5 rounded-full flex items-center ${sidebarActive ? 'px-5 py-3' :'p-3 flex-col justify-center w-10 mx-auto'}`">
          <svg-icon name='home' width='18' height='18' />
          <span v-show="sidebarActive" class="ml-3">Home</span>
      </router-link>
      <router-link
        to="/wallet"
        active-class="bg-sidebar-active"
        :class="`m-0.5 rounded-full flex items-center ${sidebarActive ? 'px-5 py-3' :'p-3 flex-col justify-center w-10 mx-auto'}`">
          <svg-icon name='wallet' width='18' height='18' />
          <span v-show="sidebarActive" class="ml-3">Wallet</span>
      </router-link>
      <router-link
        to="/booking"
        active-class="bg-sidebar-active"
        :class="`m-0.5 rounded-full flex items-center ${sidebarActive ? 'px-5 py-3' :'p-3 flex-col justify-center w-10 mx-auto'}`">
          <svg-icon name='booking' width='18' height='18' />
          <span v-show="sidebarActive" class="ml-3">Booking</span>
      </router-link>
      <router-link
        to="/business"
        active-class="bg-sidebar-active"
        :class="`m-0.5 rounded-full flex items-center ${sidebarActive ? 'px-5 py-3' :'p-3 flex-col justify-center w-10 mx-auto'}`">
          <svg-icon name='business' width='18' height='18' />
          <span v-show="sidebarActive" class="ml-3">Business</span>
      </router-link>
      <router-link
        to="/explore"
        active-class="bg-sidebar-active"
        :class="`m-0.5 rounded-full flex items-center ${sidebarActive ? 'px-5 py-3' :'p-3 flex-col justify-center w-10 mx-auto'}`">
          <svg-icon name='explore' width='18' height='18' />
          <span v-show="sidebarActive" class="ml-3">Explore</span>
      </router-link>
      <router-link
        to="/support"
        active-class="bg-sidebar-active"
        :class="`m-0.5 rounded-full flex items-center ${sidebarActive ? 'px-5 py-3' :'p-3 flex-col justify-center w-10 mx-auto'}`">
          <svg-icon name='support' width='18' height='18' />
          <span v-show="sidebarActive" class="ml-3">Support</span>
      </router-link>
    </div>

    <div class="mt-40">
        <img class="absolute bottom-0 left-0 right-0 -z-10 w-max h-40 object-cover" width="152" height="240" src="../assets/images/img-bg-cloud.png" alt="clouds">
      <router-link to="/premium" :class="`flex items-center duration-300 justify-between py-1.5 px-2  bg-white ${sidebarActive ? 'w-44 rounded-full' : 'ml-4 w-16 rounded-l-full'}`">
        <span class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
          <svg-icon name='premium' width='20' heigth='13' />
        </span>
        <span v-show="sidebarActive" class="flex flex-col">
          <span class="text-sm">
            Get Premium
          </span>
          <span class="text-xs text-gray-700">
            $39/m
          </span>
        </span>
        <svg-icon v-show="sidebarActive"  name='double-arrow-right' width='12' height='12' />
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
</style>