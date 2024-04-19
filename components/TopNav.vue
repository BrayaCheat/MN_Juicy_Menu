<template>
  <section id="header" class="dark:text-black">
    <div class="flex items-center justify-center w-full bg-gray-100 p-3">
      <img
        src="/photos/MN_Juicy_Logo.png"
        class="object-cover w-[80px] h-[80px] bg-green-500 rounded-full"
      />
    </div>

    <!-- <article class="text-md mt-3">
      យកឈ្នះបញ្ហាស្បែកនិងសម្រស់ពីការទទួលទានទឹកបន្លែផ្លែឈើដែលទទួលបានអត្ថប្រយោជន៍ដ៏មិនគួរឲ្យជឿ
      និង សម្រស់ស្អាតចែករំលែកដោយ MN Juicy.
    </article> -->

    <form @submit.prevent="handleSearch" class="mt-10">
      <UInput
        icon="i-heroicons-magnifying-glass"
        placeholder="ស្វែងរកទឹកផ្លែឈើ..."
        color="gray"
        variant="none"
        trailing
        v-model="searchBody"
        class="dark:text-black border rounded-md shadow-sm w-full"
      />
      <div
        v-if="searchBody.length"
        class="border p-2 rounded-md shadow-sm mt-3"
      >
        <div
          v-for="(name, index) in matchingName.slice(0, 5)"
          :key="index"
          class="my-3"
        >
          <UButton
            :label="name.name"
            :to="`/juice/${name._id}`"
            class="dark:text-black dark:bg-gray-100 w-full dark:hover:text-white duration-300"
          />
        </div>
      </div>
      <h1 v-if="isError" class="text-red-600 text-sm mt-3">{{ isError }}</h1>
    </form>
  </section>
</template>

<script setup>
import axios from "axios";

const searchBody = ref("");
const isError = ref();
const searchData = ref([]);

const handleSearch = async () => {
  if (searchBody.value) {
    isError.value = false;
    navigateTo(`/search?search_query=${searchBody.value}`).then(() =>
      location.reload()
    );
  } else {
    isError.value = `សូមវាយបញ្ចូលឈ្មោះរបស់ទឹកផ្លែឈើ!`;
  }
};

const getSearch = async () => {
  await axios
    .get(`https://mn-juicy-api.onrender.com/api/product`)
    .then((res) => {
      searchData.value = res.data.list;
    })
    .catch((err) => console.log(err));
};

const matchingName = computed(() => {
  return searchData.value.filter((n) =>
    n.name.toLowerCase().includes(searchBody.value.toLowerCase())
  );
});

onMounted(() => {
  getSearch();
});
</script>

<style>
#my-map-canvas img {
  max-width: none !important;
  background: none !important;
  font-size: inherit;
  font-weight: inherit;
}
</style>
