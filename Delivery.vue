<script setup>
import { ref } from "vue";

const address = ref("");
const time = ref("");

function submit() {
  alert(`Заказ: ${address.value}, ${time.value}`);
}
</script>

<template>
  <div class="container">
    <h1>🚚 Доставка</h1>

    <input v-model="address" placeholder="Адрес" />
    <br /><br />

    <input v-model="time" placeholder="Время доставки" />
    <br /><br />

    <button @click="submit">
      Далее
    </button>
  </div>
</template>