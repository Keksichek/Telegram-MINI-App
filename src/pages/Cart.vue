<script setup>
import { useCart } from "../store/cart";

const { cart, totalPrice, clearCart, increase, decrease, removeItem } = useCart();
</script>

<template>
  <div class="container">
    <h1>🛒 Корзина</h1>

    <div v-if="cart.length === 0" class="empty-cart">
      <div class="empty-icon"></div>
      <h2>Корзина пуста</h2>
      <p>Добавьте товары из каталога</p>
    </div>

    <div v-else>
      <div v-for="item in cart" :key="item.id" class="cart-item">

        <!-- 🖼️ картинка -->
        <img :src="item.image" class="cart-img" />

        <!-- 📄 инфа -->
        <div class="cart-info">
          <h3>{{ item.name }}</h3>

          <p>{{ item.price }} ₽ за шт.</p>

          <!-- ➖ ➕ -->
          <div class="qty">
            <button @click="decrease(item)">-</button>

            <span>{{ item.quantity }}</span>

            <button @click="increase(item)">+</button>

            <!-- 🗑️ удаление -->
            <button class="delete-btn" @click="removeItem(item)">
              🗑
            </button>
          </div>

          <p><b>{{ item.price * item.quantity }} ₽</b></p>
        </div>

      </div>

      <hr />

      <h2>Итого: {{ totalPrice }} ₽</h2>

      <div class="cart-actions">

        <!-- 🚚 переход к доставке -->
        <router-link to="/delivery" class="checkout-btn">
          Перейти к оформлению 🚚
        </router-link>

        <button @click="clearCart">
          Очистить корзину
        </button>
        
      </div>
    </div>
  </div>
</template>