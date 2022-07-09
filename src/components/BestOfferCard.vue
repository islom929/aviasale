<script setup>
import { defineProps } from 'vue'

const props = defineProps([
  'img', 'text', 'title', 'price', 'date', 'border', 'active'
])
</script>

<template>
  <div :class="`flex items-center justify-between py-6 ${border && 'border-b'}`">
    <span class="flex items-center w-[45%]">
      <img :src="props.img" :alt="'igm of '+ props.title" class="rounded-full mr-5">
      <p class="text-[#A2A8BF] mr-1 mb-0">{{props.text}}</p>
      <h3 class="text-[#282E44] font-semibold mb-0">{{props.title}}</h3>
    </span>
    <span class="flex w-[52%] items-center justify-between">
      <span>{{props.price}}</span>
      <span>{{props.date}}</span>
      <button>
        <span :class="`flex items-center py-3 px-6 ${props.active ? 'bg-[#163668] text-white rounded-full' : 'text-[#282E44]' }`">
          Book Now
         <svg-icon
            name='arrow-right'
            :fill="`${props.active ? '#fff' : '#282E44'}`"
            class="ml-2" />
        </span>
      </button>
    </span>
  </div>
</template>