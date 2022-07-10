<script setup>
import { defineProps, ref } from 'vue'
  const props = defineProps(['categrory' ,'rating' ,'img' ,'title' ,'dateFrom' ,'textFrom' ,'textMid' ,'dateTo' ,'textTo' ,'date' ,'sale' ,'save' ,'price'])

  const detail = ref(false)
</script>

<template>
<div class="duration-700">
  <div :class="`flex justify-between bg-white ${detail ? 'rounded-t-md' :'rounded-md'} mt-1`">
    <div :class="`w-[74%] flex flex-col ${props.categrory === 'cheapest' ? 'w-[74%]' : 'w-[79%]'}`">
      <div class="w-full py-2.5 px-5 border-b-2">
        <span class="pr-2.5 border-r-2 mr-2.5 text-[#33344F] font-semibold capitalize">{{props.categrory}}</span>
        <span class="text-[#33344F] font-semibold">Rating : <span class="text-[#E8B644] font-bold">{{props.rating}}</span></span>
      </div>
      <div class="w-full p-5 flex items-center">
        <img class="rounded-full w-[50px] h-[50px] shadow-md" :src="props.img" :alt="'img of ' + props.title">
        <h3 class="text-[#191D23] text-sm font-semibold ml-2.5 min-w-[80px]">{{props.title}}</h3>
        <div class="flex items-center justify-between ml-4 min-w-[160px] text-center">
          <p class="text-[#33344F] font-bold text-base m-0 flex flex-col items-end">
              {{props.dateFrom}}
            <span class="text-[#191D23] opacity-50 font-semibold text-xs">
              {{props.textFrom}}
            </span>
          </p>
          <span class="relative">
            <span class="w-[12px] h-[12px] bg-white block border-[#33344F]  rounded-full absolute border-2 left-[24px] top-[5px]"></span>
            <p class="text-[#33344F] font-medium text-xs m-0 pt-[12px] w-[60px] border-t-2 border-dashed border-[#33344F] mt-[10px]">
              {{props.textMid}}
            </p>
          </span>
          <p class="text-[#33344F] font-bold text-base m-0 flex flex-col items-start">
              {{props.dateTo}}
            <span class="text-[#191D23] opacity-50 font-semibold text-xs">
              {{props.textTo}}
            </span>
          </p>
        </div>
        <p class="whitespace-nowrap text-sm m-0 ml-4 text-[#33344F] font-bold">
          {{props.date}}
        </p>
        <button @click="detail = !detail" class="whitespace-nowrap text-xs ml-3 py-2 px-4 text-[#33344F] font-medium bg-[#7e829b37] rounded-full">
          View Details
        </button>
      </div>
    </div>
    <div :class="`bg-[#FAFAFB] py-3 px-4 rounded-r-md ${props.categrory === 'cheapest' ? 'w-[26%]' : 'w-[21%]'}`">
      <div class="flex flex-col justify-between h-full">
      <div class="flex items-end justify-between">
        <p v-if="props.categrory === 'cheapest'" class="text-[#DF142D] text-sm font-semibold flex flex-col w-[40%]">
          {{props.sale}}% OFF
          <span class="font-medium text-xs text-[#191D23] opacity-40">
            Save ${{props.save}}
          </span>
        </p>
        <span class="w-[50%] ml-auto">
          <p class="font-bold text-2xl text-[#191D23] whitespace-nowrap text-end">{{props.price}} <span class="text-xs opacity-40 font-medium">USD</span></p>
          <p class=" text-sm text-[#191D23] text-end">Opodo</p>
        </span>
        </div>
        <span class="w-full flex flex-col items-end">
          <button class="bg-[#0A6ADA] text-white rounded-md py-2 px-4">
            Book Now
          </button>
        </span>
      </div>
    </div>
  </div>
  <div v-if="detail" class="w-full flex items-center px-5 bg-[#F1F5F7]">
    <span class="pr-2.5 mr-2.5 text-[#33344F] font-medium uppercase border-b-[1px] py-2.5 border-[#163668]">Details</span>
    <span class="text-[#33344F] font-medium uppercase py-2.5 ">fares</span>
  </div>
  <div v-if="detail" class="bg-white flex flex-col w-full">
  <div class="w-full p-5 flex items-center">
    <img class="rounded-full w-[50px] h-[50px] shadow-md" :src="props.img" :alt="'img of ' + props.title">
    <h3 class="text-[#191D23] text-sm font-semibold ml-2.5 whitespace-nowrap">Widerope WF 143 I DH1</h3>
    <div class="flex items-center justify-between ml-4 min-w-[210px] text-center">
      <p class="text-[#33344F] font-bold text-base m-0 flex flex-col items-end">
          {{props.dateFrom}}
        <span class="text-[#191D23] opacity-50 font-semibold text-xs">
          Olso, Norway
        </span>
      </p>
      <span class="relative">
        <span class="w-[12px] h-[12px] bg-white block border-[#33344F]  rounded-full absolute border-2 left-[31px] top-[5px]"></span>
        <p class="text-[#33344F] font-medium text-xs m-0 pt-[12px] w-[74px] border-t-2 border-dashed border-[#33344F] mt-[10px]">
          HKG
        </p>
      </span>
      <p class="text-[#33344F] font-bold text-base m-0 flex flex-col items-start">
          {{props.dateTo}}
        <span class="text-[#191D23] opacity-50 font-semibold text-xs">
          DAC
        </span>
      </p>
    </div>
    <div class="flex flex-col flex-wrap h-[40px] items-end ml-4">
      <p class="whitespace-nowrap text-[#191d2354] text-xs">Baggage : <span class="text-[#33344F] font-medium">Adult</span></p>
      <p class="whitespace-nowrap text-[#191d2354] text-xs">Cabin : <span class="text-[#33344F] font-medium">40kgs</span></p>
      <p class="whitespace-nowrap text-[#191d2354] text-xs ml-5">Check In : <span class="text-[#33344F] font-medium">40kgs</span></p>
    </div>
  </div>
</div>
  <div v-if="detail" class="bg-white w-full mb-4 rounded-b-md">
    <span class="flex items-center justify-between pl-5 pr-8">
      <h3 class="whitespace-nowrap text-[#191D23] text-sm font-semibold">{{props.title}}</h3>
      <span :class="`h-[2px] block bg-[#e6e6e9] ${props.title.length > 15 ? 'w-[80%]' : 'w-[86%]'}`"></span>
    </span>
    <div class="flex items-center p-5 justify-between w-[70%]">
      <span class="flex items-center whitespace-nowrap text-xs">
        <svg-icon name='class' fill='#191D23' />
        <p class="ml-2">80 cm Seat</p>
      </span>
      <span class="flex items-center whitespace-nowrap text-xs">
        <svg-icon name='wifi' fill='#191D23' />
        <p class="ml-2">Wifi</p>
      </span>
      <span class="flex items-center whitespace-nowrap text-xs">
        <svg-icon name='food' fill='#191D23' />
        <p class="ml-2">Food Avilable</p>
      </span>
      <span class="flex items-center whitespace-nowrap text-xs">
        <svg-icon name='food' fill='#191D23' />
        <p class="ml-2">Power Outlet</p>
      </span>
    </div>
  </div>
</div>
</template>