<template>
  <section id="detail"
  class="dark:text-black"
  >
    <div v-if="juice" class="mt-10 p-2 border rounded-md shadow">
      <img
        :src="getImage(juice.image)"
        class="object-cover rounded-md shadow h-[540px] w-full"
      />
      <h1 class="font-bold text-2xl mt-3">{{ juice.name }}</h1>
      <p>{{ juice.description }}</p>

      <div class="flex items-center justify-between mt-1">
        <h1 class="text-blue-600 text-xl font-medium">6000r</h1>
        <UButton
          icon="i-heroicons-arrow-uturn-left"
          class="rounded-full"
          color="blue"
          to="/"
        />
      </div>
    </div>

    <div v-else>
      <skeleton />
    </div>
  </section>
</template>

<script setup>
import axios from "axios";

const { id } = useRoute().params;
const juice = ref();

const getDetailJuice = async () => {
  await axios
    .get(`https://mn-juicy-api.onrender.com/api/product/${id}`)
    .then((res) => (juice.value = res.data.list))
    .catch((err) => console.log(err));
};

const getImage = (photo) => {
  return `https://mn-juicy-api.onrender.com/` + photo;
};

onMounted(() => {
  getDetailJuice();
});
</script>
