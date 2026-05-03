<template>
  <div>
    <nav class="nav">
      <router-link to="/">Каталог</router-link>
      <router-link to="/cart">Корзина</router-link>
      <router-link to="/delivery">Доставка</router-link>
      <router-link to="/payment">Оплата</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style>
@import "./assets/style.css";
</style>