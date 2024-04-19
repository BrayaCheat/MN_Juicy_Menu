<template>
  <section id="juice-page" class="pt-10 grid gap-3 place-items-stretch dark:text-black">
    <div class="flex items-center gap-3">
      <UButton icon="i-heroicons-arrow-uturn-left" to="/" color="primary" class="dark:text-white" />
      <h1 class="text-2xl font-bold">{{ title }}</h1>
    </div>

    <div v-if="juiceData.length" class="grid grid-cols-2 gap-3 mt-10">
      <div v-for="(juice, index) in juiceData" :key="index">
        <Card :juice="juice" />
      </div>
    </div>

    <div v-else>
      <skeleton />
    </div>
  </section>
</template>

<script setup>
import axios from "axios";

const { query, title } = useRoute().query;
const juiceData = ref([]);

const fetchJucie = async () => {
  await axios
    .get(`https://mn-juicy-api.onrender.com/api/category/${query}`)
    .then((res) => (juiceData.value = res.data.list))
    .catch((err) => console.log(err));
};

onMounted(() => {
  fetchJucie();
});
</script>
