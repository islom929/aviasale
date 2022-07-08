<script setup>
import { onMounted, ref } from 'vue'
const marginTopChanging = ref(0)

const scrollTop = () => {
  if(window.scrollY < 150) {
    marginTopChanging.value = Number(Math.round(window.scrollY))
  }
}

onMounted(() => {
  document.addEventListener('scroll', scrollTop)
})
</script>

<template>
  <header class="sticky top-8 z-10">
    <nav class='flex justify-between'>

    <div :class="`flex text-white text-center duration-1000  h-[70px] mt-[${150 -  marginTopChanging}px]`">
      <router-link to="/flights" active-class="bg-[#0A6ADA]" class="flex items-center flex-col mx-3 p-3 rounded-lg">
        <svg-icon name='plane' />
        <span class="mt-1.5 text-xs">
          flights
        </span>
      </router-link>
      <router-link to="/hotel" active-class="bg-[#0A6ADA]" class="flex items-center flex-col mx-3 p-3 rounded-lg">
      <svg-icon name='hotel' />
        <span class="mt-1.5 text-xs">
          hotel
        </span>
        </router-link>
      <router-link to="/villa" active-class="bg-[#0A6ADA]" class="flex items-center flex-col mx-3 p-3 rounded-lg">
      <svg-icon name='villa' />
        <span class="mt-1.5 text-xs">
          villa
        </span>
      </router-link>
      <router-link to="/taxi" active-class="bg-[#0A6ADA]" class="flex items-center flex-col mx-3 p-3 rounded-lg">
      <svg-icon name='taxi' />
        <span class="mt-1.5 text-xs">
          taxi
        </span>
      </router-link>
    </div>

    <div class="flex flex-col">
      <div class="flex">
      <button class="p-1.5 rounded-full bg-[#6C86B1]/[.20] backdrop-blur">
        <span class="flex items-center">
          <span class="bg-white w-8 h-8 flex items-center justify-center rounded-full">
            <svg-icon name='home-partner' />
          </span>
          <span class="mx-2.5 text-white">
            Become a Partner
          </span>
          <span class="p-1.5">
            <svg-icon name='arrow-bottom' />
          </span>
        </span>
      </button>
      <button class="p-1.5 rounded-full bg-[#6C86B1]/[.20] backdrop-blur ml-5">
        <span class="flex items-center">
          <img src="../assets/images/img-profile.png" alt="img of profile">
          <span class="mx-2.5 text-white">
          Mansurul Haque
          </span>
          <span class="p-1.5">
            <svg-icon name='arrow-bottom' />
          </span>
        </span>
      </button>
      </div>
      <img :class="`duration-1000 h-[54px] mt-[110px] ${marginTopChanging > 50 ? 'opacity-0 -translate-y-40' : 'opacity-100'}`" src="../assets/images/img-plane.png" width="162" height="53" alt="img of plane">
    </div>
    </nav>
  </header>
</template>
<style lang="">

</style>