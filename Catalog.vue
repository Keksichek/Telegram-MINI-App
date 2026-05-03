<script setup>
import { ref } from "vue";

// товары мебели
const products = ref([
  {
    id: 1,
    name: "Диван Modern Soft",
    price: 450,
    image: "https://via.placeholder.com/300x200",
    description: "Удобный современный диван с мягкой обивкой и деревянными ножками."
  },
  {
    id: 2,
    name: "Кресло Lounge",
    price: 180,
    image: "https://via.placeholder.com/300x200",
    description: "Стильное кресло для отдыха и работы в минималистичном дизайне."
  },
  {
    id: 3,
    name: "Стол Nordic Wood",
    price: 320,
    image: "https://via.placeholder.com/300x200",
    description: "Деревянный стол в скандинавском стиле для кухни или офиса."
  }
]);

// корзина (пока просто массив)
const cart = ref([]);

// выбранный товар для модального окна
const selectedProduct = ref(null);

function addToCart(product) {
  cart.value.push(product);
  alert("Добавлено в корзину 🛒");
}

function openProduct(product) {
  selectedProduct.value = product;
}

function closeModal() {
  selectedProduct.value = null;
}
</script>

<template>
  <div class="container">
    <h1>🪑 Магазин мебели</h1>

    <!-- карточки товаров -->
    <div class="grid">
      <div
        v-for="p in products"
        :key="p.id"
        class="card"
        @click="openProduct(p)"
      >
        <img :src="p.image" class="image" />

        <h3>{{ p.name }}</h3>
        <p class="price">{{ p.price }} ₽</p>

        <button @click.stop="addToCart(p)">
          Добавить в корзину
        </button>
      </div>
    </div>

    <!-- МОДАЛЬНОЕ ОКНО -->
    <div v-if="selectedProduct" class="modal-overlay" @click="closeModal">
      <div class="modal" @click.stop>
        <img :src="selectedProduct.image" class="modal-img" />

        <h2>{{ selectedProduct.name }}</h2>
        <p>{{ selectedProduct.description }}</p>
        <p class="price">{{ selectedProduct.price }} ₽</p>

        <button @click="addToCart(selectedProduct)">
          Добавить в корзину 🛒
        </button>

        <button class="close" @click="closeModal">
          Закрыть
        </button>
      </div>
    </div>
  </div>
</template>