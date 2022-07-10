<script setup>
import FlightsRating from '../components/FlightsRating.vue'
import FlightsTable from '../components/FlightsTable.vue'

</script>

<template>
  <div class="w-full flex items-start justify-between mt-5">
    <flights-table class="w-[70%]" />
    <flights-rating class="w-[28%]" />
  </div>
</template>