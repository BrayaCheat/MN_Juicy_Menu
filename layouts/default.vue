<template>
  <div class="container mx-auto sm:w-[560px] w-full bg-white p-3 rounded shadow">
    <header>
        <TopNav />
    </header>

    <main>
        <slot />
    </main>
    
    <footer>
        <UButton
        label="Developed by BRAYA CHEAT"
        class="mt-10 dark:text-black border w-full"
        color="gray"
        variant="none"
        to="https://web.facebook.com/braya.cheat"
        />
    </footer>
  </div>
</template>

