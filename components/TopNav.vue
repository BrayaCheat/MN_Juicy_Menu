<template>
  <section id="header"
  class="dark:text-black"
  >
    <UButton
      label="MN-Juicy Menu"
      color="blue"
      variant="none"
      class="text-2xl ps-0 font-medium"
      to="/"
    />
    <div class="flex flex-wrap items-center justify-start gap-3 mt-3">
      <UButton
        label="Fairplus Market. Phnom Penh"
        icon="i-heroicons-map-pin"
        color="blue"
        trailing
        variant="link"
        class="font-normal ps-0"
        to="https://www.google.com/maps/dir/11.5434687,104.8939592/FairPlus+Supercenter+Steung+Mean+Chey,+Samdech+Monireth+Blvd+(217),+Phnom+Penh/@11.5434968,104.8913213,17z/data=!3m1!4b1!4m18!1m8!3m7!1s0x310951fd15cf0e79:0x642f021e01925ce3!2sFairPlus+Supercenter+Steung+Mean+Chey!8m2!3d11.5434187!4d104.8939575!15sCghmYWlycGx1c1oKIghmYWlycGx1c5IBC3N1cGVybWFya2V04AEA!16s%2Fg%2F11frrzky7d!4m8!1m1!4e1!1m5!1m1!1s0x310951fd15cf0e79:0x642f021e01925ce3!2m2!1d104.8939575!2d11.5434187?entry=ttu"
      />
      <UButton
        :label="phoneNumber"
        trailing
        icon="i-heroicons-phone"
        color="blue"
        variant="link"
        class="font-normal ps-0"
        :to="`tel:${phoneNumber}`"
      />
    </div>

    <article class="text-md mt-3">
      យកឈ្នះបញ្ហាស្បែកនិងសម្រស់ពីការទទួលទានទឹកបន្លែផ្លែឈើដែលទទួលបានអត្ថប្រយោជន៍ដ៏មិនគួរឲ្យជឿ
      និង សម្រស់ស្អាតចែករំលែកដោយ MN Juicy.
    </article>

    <form @submit.prevent="handleSearch" class="mt-10">
      <UInput
        icon="i-heroicons-magnifying-glass"
        placeholder="ស្វែងរកទឹកផ្លែឈើ..."
        color="gray"
        variant="none"
        trailing
        v-model="searchBody"
        class="dark:text-black border rounded-md shadow-sm"
      />
      <h1 v-if="isError" class="text-red-600 text-sm mt-3">{{ isError }}</h1>
    </form>
  </section>
</template>

<script setup>
const searchBody = ref("");
const isError = ref();
const phoneNumber = ref('+855 16 810 300')

const handleSearch = async () => {
  if (searchBody.value) {
    isError.value = false;
    navigateTo(`/search?search_query=${searchBody.value}`).then(() =>
      location.reload()
    );
  } else {
    isError.value = `វាយបញ្ចូលឈ្មោះរបស់ទឹកផ្លែឈើ!`;
  }
};
</script>
