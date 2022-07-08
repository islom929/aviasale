<script setup>
import { defineProps } from 'vue'

const props = defineProps(['iconName', 'iconTitle','title','text', 'iconTop', 'iconBottom', 'sidebarActive', 'icon', 'iconNameCenter'])

</script>

<template>
  <div>
    <span
      v-if="!props.sidebarActive"
      class="uppercase text-[#b8c1de] opacity-90 text-xs ml-4">
        {{props.iconTitle}}</span>
    <div
      :class="`bg-[#EEF0F4] flex flex-col items-start
      ${props.sidebarActive ? 'px-5 pt-3 pb-1.5 rounded-lg' : 'rounded-full p-3.5'}`">
      <div
        v-if="props.sidebarActive"
          class="flex items-center text-[#475073] w-full justify-between ">
        <span class="flex items-center">
          <svg-icon :name='props.iconName' />
          <p
            class="opacity-30 uppercase ml-1 text-xs">
            {{props.iconTitle}}</p>
        </span>
        <svg-icon
          v-if="props.iconTop"
          name='arrow-bottom' />
      </div>
      <span class="flex items-center justify-between w-full">
      <h3
        :class="`text-[#2E3758] whitespace-nowrap ${props.sidebarActive ? 'text-base font-bold' : 'text-sm font-semibold'}`">
        {{props.title}}</h3>
      <svg-icon
        v-if="!props.sidebarActive && props.icon"
        :name='iconNameCenter' />
      </span>
      <span
        v-if="props.sidebarActive"
        class="w-full flex items-center justify-between">
        <p
          class="text-[#475073] opacity-70 text-sm">
          {{props.text}}</p>
        <svg-icon
          v-if="props.iconBottom" name='arrow-bottom' />
      </span>
    </div>
  </div>

</template>