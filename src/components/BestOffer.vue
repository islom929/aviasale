<script setup>
import { reactive } from 'vue'
import BestOfferCard from './BestOfferCard.vue'

const offerCard = reactive([
  {
    img: 'https://via.placeholder.com/50',
    text: 'Via - ',
    title: 'Delhi, Toronto, Mexico',
    price: '546',
    date: '15 Aug - 22 Aug',
    link: '/book-now',
    border: true,
    active: false
  },
  {
    img: 'https://via.placeholder.com/50',
    text: 'Via - ',
    title: 'Chennai, Mumbai',
    price: '346',
    date: '15 Aug - 22 Aug',
    link: '/book-now',
    border: true,
    active: false
  },
  {
    img: 'https://via.placeholder.com/50',
    text: 'Via - ',
    title: 'Mumbai, Bangalore, Pune',
    price: '435',
    date: '15 Aug - 22 Aug',
    link: '/book-now',
    border: true,
    active: true
  },
  {
    img: 'https://via.placeholder.com/50',
    text: 'Via - ',
    title: 'Pune, Mumbai, Kolkata',
    price: '541',
    date: '15 Aug - 22 Aug',
    link: '/book-now',
    border: true,
    active: false
  },
  {
    img: 'https://via.placeholder.com/50',
    text: 'Via - ',
    title: 'Mumbai, Bangalore',
    price: '390',
    date: '15 Aug - 22 Aug',
    link: '/book-now',
    border: false,
    active: false
  },
])
</script>

<template>
  <div class="w-full bg-white px-14 py-6 rounded-2xl mt-[50px]">
    <div class="flex items-center justify-between w-full  mb-5">
      <h2 class="text-2xl text-[#282E44] font-extrabold mb-0">Best Offer</h2>
      <router-link class="text-lg text-[#282E44] opacity-50"  to='/book-all'>View all</router-link>
    </div>

    <div class="w-full flex flex-col">
      <best-offer-card
        v-for="item of offerCard"
        :key="item.key"
        :text='item.text'
        :title='item.title'
        :price='item.price'
        :date='item.date'
        :img='item.img'
        :border='item.border'
        :active='item.active'
      />
    </div>
  </div>
</template>