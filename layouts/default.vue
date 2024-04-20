<template>
  <div class="container mx-auto sm:w-[560px] w-full bg-white px-3 pb-3 shadow">
    <main>
      <slot />
    </main>

    <footer class="mt-10 mb-28 border p-2 rounded-md shadow-sm">
      <UVerticalNavigation :links="links" />
    </footer>
  </div>
</template>

<script setup>
const links = [
  {
    label: 'ទំនាក់ទំនង',
    icon: 'i-heroicons-phone'
  },
  {
    label: "Malis Kheang",
    to: "tel:016810300",
    avatar: {
      src: "/photos/malis.jpg",
    },
    badge: "+855 16 810 300",
  },
  {
    label: "Phon Sreyni",
    to: "tel:096 979 6159",
    avatar: {
      src: "/photos/nik.jpg",
    },
    badge: "+855 96 979 6159",
  },
  {
    label: "Braya Cheat",
    avatar: {
      src: "https://scontent.fpnh8-1.fna.fbcdn.net/v/t39.30808-1/431860965_1089495508970368_2374656604048860186_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEXPdqC2EdZdrtDBbYmvmcE-zw2QTvaU6j7PDZBO9pTqJI7RpfzRGmM9aY8KR_YRVlo7x-MDhyaaldrNXAAuelW&_nc_ohc=Su7fBrAgtVAAb72Z9jD&_nc_ht=scontent.fpnh8-1.fna&oh=00_AfACRuQuVk93vVC7DrmWGWcvn3eSYPA3irYllr7QbdEcAQ&oe=6627DE53",
    },
    badge: "Developer",
    to: "https://web.facebook.com/braya.cheat/",
  },
  {
    label: "TikTok",
    avatar: {
      src: "https://images.rawpixel.com/image_png_400/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kNS0wOC5wbmc.png",
    },
    to: "https://www.tiktok.com/@m_skin__",
  },
  {
    label: "Instagram",
    avatar: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png?20200512141346",
    },
    to: "https://www.instagram.com/m_skin__/",
  },
  {
    label: "Telegram",
    avatar: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png?20220101141644",
    },
    to: "https://t.me/Malis_Kheang",
  },
];
</script>
