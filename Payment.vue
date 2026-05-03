<template>
  <div class="container">
    <h1>💳 Оплата</h1>

    <p>Здесь будет имитация оплаты</p>

    <button @click="pay">
      Оплатить
    </button>
  </div>
</template>

<script setup>
function pay() {
  alert("Оплата успешна 🎉");
}
</script>