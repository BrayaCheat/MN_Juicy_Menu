<template>
  <section id="card">
    <div v-if="juice" class="border p-2 rounded-md shadow-sm duration-300 hover:border-blue-600">
      <img
        :src="getImage(juice.image)"
        class="sm:h-[300px] h-[200px] object-cover w-full rounded shadow-md"
      />
      <h1 class="font-bold mt-3 h-[48px] sm:h-full">{{ juice.name }}</h1>
      <p class="h-[48px]">{{ juice.description }}</p>
      <div class="flex items-center justify-between mt-1">
        <h1 class="text-blue-600 text-2xl font-medium">6000r</h1>
        <UButton icon="i-heroicons-plus" class="rounded-full" color="blue" />
      </div>
    </div>
  </section>
</template>

<script setup>
const { juice } = defineProps(["juice"]);

const getImage = (photo) => {
  return `https://mn-juicy-api.onrender.com/` + photo;
};
</script>
