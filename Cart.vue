<script setup>
import { ref } from "vue";

const cart = ref([]);
</script>

<template>
  <div class="container">
    <h1>🛒 Корзина</h1>

    <p v-if="cart.length === 0">
      Корзина пустая
    </p>

    <div v-for="item in cart" :key="item.id" class="card">
      <h3>{{ item.name }}</h3>
      <p>{{ item.price }} €</p>
    </div>

    <router-link to="/delivery">
      Перейти к доставке
    </router-link>
  </div>
</template>