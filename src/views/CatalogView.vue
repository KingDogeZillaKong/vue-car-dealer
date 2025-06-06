<script setup lang="ts">


</script>

<template>
  <main class="wrapper">
    wo  
    <div @for="product in products">
            <CatalogItem :item="product"/>
    </div>

</main>
</template>

<style scoped>

  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, auto);
  }

</style>
