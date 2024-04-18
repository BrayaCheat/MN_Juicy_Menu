<template>
  <div class="container mx-auto sm:w-[560px] w-[375px] bg-white p-3 rounded shadow">
    <header>
        <TopNav />
    </header>

    <main>
        <slot />
    </main>
    
    <footer>
        <UHorizontalNavigation
        class="mt-10 border"
        :links="links"
        />
    </footer>
  </div>
</template>

<script setup>
    const links = [
        [
            {
                label: 'Developed by BRAYA CHEAT'
            }
        ]
    ]
</script>
