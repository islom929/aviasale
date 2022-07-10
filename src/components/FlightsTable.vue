<script setup>
import FlightsCard from './FlightsCard.vue'
import { reactive, ref } from 'vue'

const categoryChoosed = ref('cheapest')

const flightsArr = reactive([
  {
    categrory: 'cheapest',
    rating: '4.5',
    img: 'https://via.placeholder.com/50',
    title: 'Emirates',
    dateFrom: '12:10',
    textFrom: 'GAU',
    textMid: 'HKG',
    dateTo: '18:30',
    textTo: 'DAC',
    date: '68h 10m',
    sale: '20',
    save: '129',
    price: '399',
    bookingLink: '/book-now'
  },
  {
    categrory: 'cheapest',
    rating: '4.5',
    img: 'https://via.placeholder.com/50',
    title: 'AM Airlines',
    dateFrom: '12:10',
    textFrom: 'GAU',
    textMid: 'HKG',
    dateTo: '18:30',
    textTo: 'DAC',
    date: '68h 10m',
    detailLink: 'View Details',
    sale: '20',
    save: '129',
    price: '399',
    bookingLink: '/book-now'
  },
  {
    categrory: 'cheapest',
    rating: '4.5',
    img: 'https://via.placeholder.com/50',
    title: 'Biman Bangladesh',
    dateFrom: '12:10',
    textFrom: 'GAU',
    textMid: 'HKG',
    dateTo: '18:30',
    textTo: 'DAC',
    date: '68h 10m',
    detailLink: 'View Details',
    sale: '20',
    save: '129',
    price: '399',
    bookingLink: '/book-now'
  },
  {
    categrory: 'cheapest',
    rating: '4.5',
    img: 'https://via.placeholder.com/50',
    title: 'Emirates',
    dateFrom: '12:10',
    textFrom: 'GAU',
    textMid: 'HKG',
    dateTo: '18:30',
    textTo: 'DAC',
    date: '68h 10m',
    detailLink: 'View Details',
    sale: '20',
    save: '129',
    price: '399',
    bookingLink: '/book-now'
  },
  {
    categrory: 'cheapest',
    rating: '4.5',
    img: 'https://via.placeholder.com/50',
    title: 'Biman Bangladesh',
    dateFrom: '12:10',
    textFrom: 'GAU',
    textMid: 'HKG',
    dateTo: '18:30',
    textTo: 'DAC',
    date: '68h 10m',
    detailLink: 'View Details',
    sale: '20',
    save: '129',
    price: '399',
    bookingLink: '/book-now'
  },
  {
    categrory: 'best',
    rating: '4.9',
    img: 'https://via.placeholder.com/50',
    title: 'Emirates',
    dateFrom: '12:10',
    textFrom: 'GAU',
    textMid: 'HKG',
    dateTo: '18:30',
    textTo: 'DAC',
    date: '68h 10m',
    detailLink: 'View Details',
    sale: '',
    save: '',
    price: '799',
    bookingLink: '/book-now'
  },
  {
    categrory: 'best',
    rating: '5',
    img: 'https://via.placeholder.com/50',
    title: 'Biman Bangladesh',
    dateFrom: '12:10',
    textFrom: 'GAU',
    textMid: 'HKG',
    dateTo: '18:30',
    textTo: 'DAC',
    date: '68h 10m',
    detailLink: 'View Details',
    sale: '',
    save: '',
    price: '699',
    bookingLink: '/book-now'
  },
  {
    categrory: 'best',
    rating: '5',
    img: 'https://via.placeholder.com/50',
    title: 'AM Airlines',
    dateFrom: '12:10',
    textFrom: 'GAU',
    textMid: 'HKG',
    dateTo: '18:30',
    textTo: 'DAC',
    date: '68h 10m',
    detailLink: 'View Details',
    sale: '',
    save: '',
    price: '999',
    bookingLink: '/book-now'
  },
  {
    categrory: 'quickest',
    rating: '4.8',
    img: 'https://via.placeholder.com/50',
    title: 'Biman Bangladesh',
    dateFrom: '12:10',
    textFrom: 'GAU',
    textMid: 'HKG',
    dateTo: '15:30',
    textTo: 'DAC',
    date: '45h 10m',
    detailLink: 'View Details',
    sale: '',
    save: '',
    price: '699',
    bookingLink: '/book-now'
  },
  {
    categrory: 'quickest',
    rating: '4.6',
    img: 'https://via.placeholder.com/50',
    title: 'AM Airlines',
    dateFrom: '12:10',
    textFrom: 'GAU',
    textMid: 'HKG',
    dateTo: '15:30',
    textTo: 'DAC',
    date: '58h 10m',
    detailLink: 'View Details',
    sale: '',
    save: '',
    price: '599',
    bookingLink: '/book-now'
  },
])
</script>

<template>
<div>
  <div class="bg-[#F7F9FB] rounded-md py-3 px-5 flex items-center justify-between">
    <div class="flex items-center">
      <h2 class="text-xl font-bold text-[#191D23] mr-2.5">
        Flights</h2>
      <span class="text-xs text-[#191D23] pl-2.5 border-l-2">
        Total
        <span class="text-[#177CFD]">126 result</span>
      </span>
    </div>
    <div class="flex items-center justify-between">
      <button @click="categoryChoosed = 'cheapest'" :class="`py-2 px-3.5 rounded-full ${categoryChoosed === 'cheapest' ? 'bg-[#163668] text-white' : 'text-[#163668]'}`">
        Cheapest
      </button>
      <button @click="categoryChoosed = 'best'" :class="`py-2 px-3.5 mx-3 rounded-full ${categoryChoosed === 'best' ? 'bg-[#163668] text-white' : 'text-[#163668]'}`">
        Best
      </button>
      <button @click="categoryChoosed = 'quickest'" :class="`py-2 px-3.5 rounded-full ${categoryChoosed === 'quickest' ? 'bg-[#163668] text-white' : 'text-[#163668]'}`">
        Quickest
      </button>
    </div>
  </div>
  <div class="flex flex-col w-full">
    <div v-for="item in flightsArr" :key="item">
      <flights-card
        v-if="categoryChoosed === item.categrory"
        :categrory='item.categrory'
        :rating='item.rating'
        :img='item.img'
        :title='item.title'
        :dateFrom='item.dateFrom'
        :textFrom='item.textFrom'
        :textMid='item.textMid'
        :dateTo='item.dateTo'
        :textTo='item.textTo'
        :date='item.date'
        :sale='item.sale'
        :save='item.save'
        :price='item.price'
      />
    </div>
  </div>
</div>
</template>