<template>
  <section id="google-map" class="w-full mt-10 border rounded-md shadow-sm">
    <UHorizontalNavigation :links="links"/>
    <div
      style="
        max-width: 100%;
        overflow: hidden;
        color: red;
        width: 100%;
        height: 500px;
      "
    >
      <div
        id="my-map-canvas"
        style="height: 100%; width: 100%; max-width: 100%"
      >
        <iframe
          style="height: 100%; width: 100%; border: 0"
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?q=FairPlus+Supercenter+Steung+Mean+Chey,+Samdech+Monireth+Boulevard+(217),+Phnom+Penh,+Cambodia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>
      <a
        class="my-codefor-googlemap"
        rel="nofollow"
        href="https://www.bootstrapskins.com/themes"
        id="grab-map-authorization"
        >premium bootstrap themes</a
      >
    </div>
  </section>
</template>

<script setup>
    const links = [
        {
            label: 'ទីតាំងរបស់ហាង',
            icon: 'i-heroicons-map-pin'
        }
    ]
    </script>
