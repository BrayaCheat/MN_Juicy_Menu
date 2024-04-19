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

      <h1 v-if="isError" class="text-red-600 text-sm mt-3">{{ isError }}</h1>
    </form>
  </section>
</template>

<script setup>
const searchBody = ref("");
const isError = ref();

const map = [
  {
    label: "ផ្សារទំនើប Fair Plus (ស្ទឹងមានជ័យ)",
    avatar: {
      src: "https://static-00.iconduck.com/assets.00/google-maps-old-icon-512x512-5baetapg.png",
    },
    badge: "Google Map",
    to: "https://www.google.com/maps/dir/11.5434687,104.8939592/FairPlus+Supercenter+Steung+Mean+Chey,+Samdech+Monireth+Blvd+(217),+Phnom+Penh/@11.5434968,104.8913213,17z/data=!3m1!4b1!4m18!1m8!3m7!1s0x310951fd15cf0e79:0x642f021e01925ce3!2sFairPlus+Supercenter+Steung+Mean+Chey!8m2!3d11.5434187!4d104.8939575!15sCghmYWlycGx1c1oKIghmYWlycGx1c5IBC3N1cGVybWFya2V04AEA!16s%2Fg%2F11frrzky7d!4m8!1m1!4e1!1m5!1m1!1s0x310951fd15cf0e79:0x642f021e01925ce3!2m2!1d104.8939575!2d11.5434187?entry=ttu",
  },
];

const phone = [
  
];

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
</script>

<style>
#my-map-canvas img {
  max-width: none !important;
  background: none !important;
  font-size: inherit;
  font-weight: inherit;
}
</style>
