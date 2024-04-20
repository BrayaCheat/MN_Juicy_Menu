<template>
  <section id="card"
  class="dark:text-black"
  >
    <div v-if="juice" class="border p-2 rounded-md shadow-sm duration-300 hover:border-green-500">
      <img
        :src="getImage(juice.image)"
        class="sm:h-[300px] h-[200px] object-cover w-full rounded shadow-md"
      />
      <h1 class="font-bold mt-3 h-[48px] sm:h-full">{{ juice.name }}</h1>
      <p class="h-[48px]">{{ juice.description }}</p>
      <div class="flex items-center justify-between mt-1">
        <h1 class="text-green-500 text-xl font-medium">6000 រៀល</h1>
        <UButton
           icon="i-heroicons-eye" 
           class="rounded-full dark:text-white" 
           color="primary" 
           :to="`/juice/${juice._id}`"
           />
      </div>
    </div>
    <div v-else>
      <skeleton />
    </div>
  </section>
</template>

<script setup>
const { juice } = defineProps(["juice"]);

const getImage = (photo) => {
  return `https://mn-juicy-api.onrender.com/` + photo;
};
</script>
