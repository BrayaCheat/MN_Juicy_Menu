<template>
  <section id="banner">
    <NuxtLink
      :to="`/juice?query=${banner.path}&title=${banner.name}`"
      class="grid place-items-center mt-10 h-[220px] relative rounded-md shadow-md"
      v-for="(banner, index) in BannerData"
      :key="index"
      :style="{
        backgroundImage: `url(${banner.photo})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }"
    >
      <div
        class="w-full h-full backddrop-blur-md bg-black bg-opacity-50 hover:bg-opacity-70 duration-300 absolute z-10 rounded-md"
      />
      <h1 class="text-white absolute z-20 text-2xl font-normal uppercase">
        {{ banner.name }}
      </h1>
    </NuxtLink>
  </section>
</template>

<script setup>
const BannerData = ref([
  {
    name: "ភេសជ្ជៈពេញនិយម",
    photo: "/photos/popular.jpg",
    path: 'Star'
  },
  {
    name: "សម្រាប់ស្បែកមុខមុន",
    photo: "/photos/acnecare.jpg",
    path: 'Ance Care'
  },
  {
    name: "សម្រកក្បាលពោះ",
    photo: "/photos/weightloss.jpg",
    path: 'Weight Loss'
  },
  {
    name: "សម្រាប់ស្បែកភ្លឺថ្លា",
    photo: "/photos/glowingskin.jpg",
    path: 'Glowing Skin'
  },
]);
</script>
