<script setup>
import TheFilter from './TheFilter.vue'
import { defineProps, reactive, ref } from 'vue'

const props = defineProps(['sidebarActive'])

const filterArr = reactive([
  {
    iconTitle: 'Type',
    title: 'Onway',
    icon: true,
    isShow: false,
    iconNameCenter: 'arrow-bottom',
    widthActive: 'w-[12%]',
  },
  {
    iconName: 'location',
    iconTitle: 'form',
    title: 'Dhaka, Bangladesh',
    text: 'Usmani airport, Sylhet',
    isShow: true,
    width: 'w-[32%]',
    widthActive: 'w-[22%]',
  },
  {
    iconName: 'location',
    iconTitle: 'to',
    title: 'Dilhi, India',
    text: 'Shuvas chandra bosu airport',
    isShow: true,
    width: 'w-[32%]',
    widthActive: 'w-[20%]',
  },
  {
    iconName: 'class',
    iconTitle: 'class',
    title: '3 Persons',
    text: 'Business',
    iconBottom: true,
    isShow: true,
    icon: true,
    iconNameCenter: 'arrow-bottom',
    width: 'w-[32%]',
    widthActive: 'w-[16%]',
  },
  {
    iconTitle: 'Departure - Return',
    title: '21 Aug’19  -  29 Aug’19',
    text: '',
    icon: true,
    isShow: false,
    iconNameCenter: 'calendar',
    widthActive: 'w-[26%]',
  },
  {
    iconName: 'calendar',
    iconTitle: 'Departure',
    title: '21 Aug’20',
    text: 'Sunday',
    iconTop: true,
    isShow: true,
    width: 'w-[28%]',
  },
  {
    iconName: 'calendar',
    iconTitle: 'return',
    title: '29 Aug’20',
    text: 'Sunday',
    iconTop: true,
    isShow: true,
    width: 'w-[28%]',
  },
  {
    iconName: 'calendar',
    iconTitle: 'return',
    title: 'More',
    text: '...',
    width: 'w-[15%]',
  }
])

const buttonActive = ref(true)

</script>

<template>
  <div :class="`bg-white rounded-2xl mt-5 duration-1000 relative z-10 ${props.sidebarActive ? 'p-9' : 'px-8 py-4 flex justify-between items-end'}`">
    <div v-if="props.sidebarActive" class="w-full flex items-center mb-5">
      <button @click="buttonActive = !buttonActive" :class="`py-2.5 px-5 text-[#353F65] rounded-full ${buttonActive && 'bg-[#F0F2F6] shadow-sm'}`">
        Oneway
      </button>
      <button class="py-2.5 px-5">
        Round Trip
      </button>
      <button class="py-2.5 px-5">
        Multy city
      </button>
    </div>
    <div :class="`flex justify-between ${props.sidebarActive ? ' w-full ' : 'w-[74%]'}`">
      <the-filter
        v-if="props?.sidebarActive === filterArr[0]?.isShow"
        :sidebarActive='props?.sidebarActive'
        :class="`${filterArr[0]?.sidebarActive ?  filterArr[0]?.width : filterArr[0]?.widthActive}`"
        :iconName='filterArr[0]?.iconName'
        :iconTitle='filterArr[0]?.iconTitle'
        :title='filterArr[0]?.title'
        :text='filterArr[0]?.text'
        :icon='filterArr[0]?.icon'
        :iconNameCenter='filterArr[0]?.iconNameCenter'
        :iconTop='filterArr[0]?.iconTop'
        :iconBottom='filterArr[0]?.iconBottom'
      />
      <the-filter
        v-for="item in filterArr.slice(1, 4)"
        :key="item?.id"
        :sidebarActive='props?.sidebarActive'
        :class="`${props?.sidebarActive ?  item?.width : item?.widthActive}`"
        :iconName='item?.iconName'
        :iconTitle='item?.iconTitle'
        :title='item?.title'
        :text='item?.text'
        :icon='item?.icon'
        :iconNameCenter='item?.iconNameCenter'
        :iconTop='item?.iconTop'
        :iconBottom='item?.iconBottom'
      />
      <the-filter
        v-if="props?.sidebarActive === filterArr[4]?.isShow"
        :sidebarActive='props?.sidebarActive'
        :class="`${filterArr[4]?.sidebarActive ?  filterArr[4]?.width : filterArr[4]?.widthActive}`"
        :iconName='filterArr[4]?.iconName'
        :iconTitle='filterArr[4]?.iconTitle'
        :title='filterArr[4]?.title'
        :text='filterArr[4]?.text'
        :icon='filterArr[4]?.icon'
        :iconNameCenter='filterArr[4]?.iconNameCenter'
        :iconTop='filterArr[4]?.iconTop'
        :iconBottom='filterArr[4]?.iconBottom'
      />
    </div>
    <div :class="`flex justify-between ${props.sidebarActive ? ' w-full mt-4' : 'w-[18%]'}`">
      <div v-for="item in filterArr.slice(5, 8)"
          :key="item?.id"
          :class="`${props?.sidebarActive ?  item?.width : item?.widthActive}`"
        >
        <the-filter
          v-if="props?.sidebarActive"
          :sidebarActive='props?.sidebarActive'
          :iconName='item?.iconName'
          :iconTitle='item?.iconTitle'
          :title='item?.title'
          :text='item?.text'
          :icon='item?.icon'
          :iconNameCenter='item?.iconNameCenter'
          :iconTop='item?.iconTop'
          :iconBottom='item?.iconBottom'
        />
      </div>

      <button :class="`uppercase  whitespace-nowrap rounded-lg text-white bg-[#DF142D] ${props.sidebarActive ? 'w-[24%] font-bold text-lg' : ' w-full rounded-full py-[15px]'}`">
        search flight
      </button>
    </div>
  </div>
</template>