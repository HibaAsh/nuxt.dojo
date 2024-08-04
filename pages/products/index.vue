<template>
    <div>
      <div class="grid grid-cols-4 gap-5">
        <div v-for="product in products">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </template>
  
<script setup>
definePageMeta({
  layout: 'products'
})

// fetch products
const { data: products } = await useFetch('https://fakestoreapi.com/products')

// overriding the global meta-data in the config.file
useHead({
  title: 'Nuxt Dojo | Merch',
  meta: [
    { name: 'description', content: 'Nuxt 3 Merch' }
  ]
})

</script>

<style scoped>

</style>