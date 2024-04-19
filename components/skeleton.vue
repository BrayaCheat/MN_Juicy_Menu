<template>
    <div class="flex items-start space-x-4 border p-2 shadow-sm rounded-md mt-10">
      <USkeleton class="h-12 w-12 dark:bg-gray-200" :ui="{ rounded: 'rounded-full' }" />
      <div class="space-y-2">
        <USkeleton class="h-4 w-[250px] dark:bg-gray-200" />
        <USkeleton class="h-4 w-[200px] dark:bg-gray-200" />
        <USkeleton class="h-4 w-[250px] dark:bg-gray-200" />
        <USkeleton class="h-4 w-[200px] dark:bg-gray-200" />
      </div>
    </div>
  </template>
  
  