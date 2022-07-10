<script setup>

</script>

<template>
  <div class="bg-white rounded-lg sticky top-[225px]">
      <h2 class="text-xl bg-[#F9F9F9] rounded-t-lg py-3 px-5 font-bold text-[#191D23] m-0">
        Filters
      </h2>
      <div class="p-5 flex flex-col items-center">
        <div>
          <span class="flex items-end justify-between">
          <h3 class="text-[#191D23] opacity-70">
            Price
          </h3>
          <span class="text-sm text-[#191D23] opacity-90">
            +795
          </span>
          </span>
          <div class="mt-10 relative">
            <svg-icon name='rating'/>
            <div class="absolute -bottom-[10px] flex items-center w-[100%]">
            <button class="border-4 relative before:content-['$3,54'] before:text-[#191D23] before:opacity-30 before:absolute before:bottom-[50px] bg-white border-[#3C6097] border-solid rounded-full w-[20px] h-[20px]">
            </button>
            <span class="bg-[#3C6097] block h-[4px] w-[45%]"></span>
            <button class="border-4 relative items-center before:content-['$2,54'] before:text-[#191D23] before:opacity-30 before:absolute before:bottom-[50px] before:-left-[20px] bg-white border-[#3C6097] border-solid rounded-full w-[20px] h-[20px]">
            </button>
            </div>
          </div>
          <div class="mt-8">
            <label class="text-[#191D23] text-lg"> Stop
              <select class="border border-gray-300 text-gray-900 w-full p-2.5 rounded-lg mt-4">
                <option value="usa" class="text-[#191D23]">Los angeles, USA</option>
                <option value="am" class="text-[#191D23]">AM Airlines</option>
                <option value="bb" class="text-[#191D23]">Biman Bangladesh</option>
                <option value="emir" class="text-[#191D23]">Emirates</option>
              </select>
            </label>
            </div>
            <div class="mt-6">
            <label class="text-[#191D23] text-lg"> Airlines
              <select class="border border-gray-300 text-gray-900 w-full p-2.5 rounded-lg mt-4">
                <option value="qatar" class="text-[#191D23]">Qatar Airways</option>
                <option value="am" class="text-[#191D23]">AM Airlines</option>
                <option value="bb" class="text-[#191D23]">Biman Bangladesh</option>
                <option value="emir" class="text-[#191D23]">Emirates</option>
              </select>
            </label>
            </div>
            <div class="mt-6">
              <div>
                Airport
                <div class="mt-4 flex items-center">
                <input class="h-4 w-4" type="radio" name="airport" id="airport">
                <label for="airport" class="ml-3 text-[#191D23] opacity-40">Dhaka</label>
                </div>
                <div class="flex items-center my-1">
                <input  class="h-4 w-4" type="radio" name="airport" id="airport1">
                <label for="airport1" class="ml-3 text-[#191D23] opacity-40">Dubai</label>
                </div>
                <div class="flex items-center">
                <input  class="h-4 w-4" type="radio" name="airport" id="airport2">
                <label for="airport2" class="ml-3 text-[#191D23] opacity-40">Muscut</label>
                </div>
              </div>
            </div>
        </div>
        <button class="mt-16">
          <span class="text-[#163668] flex items-center">
            More
            <svg-icon class="ml-2" name='arrow-bottom' />
          </span>
        </button>
      </div>
  </div>
</template>