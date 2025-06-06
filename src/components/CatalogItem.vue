<script setup>
import ProductModel from "../../product-model"
    export default {
        defineProps(product: ProductModel)

    }
</script>
<template>
    <div class="item">

    </div>
</template>
<style scoped>
.item {
    display: block;
    width: 300px;
    height: 400px;
}
</style>