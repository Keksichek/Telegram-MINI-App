<script setup>
import { ref, computed } from "vue";
import { useCart } from "../store/cart";

// ✅ импорт товаров
import { products as productsData } from "../data/products";

const { addToCart } = useCart();

// 🔎 поиск и фильтры
const search = ref("");
const selectedCategory = ref("Все");
const selectedColor = ref("");
const minPrice = ref(0);
const maxPrice = ref(60000);

// 📦 категории
const categories = [
  "Все",
  "Диваны",
  "Кресла",
  "Офисные кресла",
  "Кровати",
  "Шкафы",
  "Стулья",
  "Столы"
];

// 🎨 цвета
const colors = [
  { name: "Все", value: "", isAll: true },
  { name: "Серый", value: "#808080" },
  { name: "Бежевый", value: "#f5f5dc" },
  { name: "Дерево", value: "#8b4513" },
  { name: "Чёрный", value: "#000000" },
  { name: "Белый", value: "#ffffff" },
  { name: "Тёмный", value: "#2f4f4f" }
];

// ✅ теперь товары из файла
const products = ref(productsData);

// 🪟 модалка
const selectedProduct = ref(null);

// 🔍 фильтрация
const filteredProducts = computed(() => {
  return products.value.filter(p => {
    return (
      p.name.toLowerCase().includes(search.value.toLowerCase()) &&
      (selectedCategory.value === "Все" || p.category === selectedCategory.value) &&
      (!selectedColor.value || p.color === selectedColor.value) &&
      p.price >= minPrice.value &&
      p.price <= maxPrice.value
    );
  });
});

function openProduct(p) {
  selectedProduct.value = p;
}

function closeModal() {
  selectedProduct.value = null;
}
</script>

<template>
  <div class="container">
    <h1>🪑 Telegram Mini App Store</h1>

    <!-- 🔎 поиск -->
    <div class="search-box">
      <input v-model="search" placeholder="Поиск товара..." />
    </div>

    <!-- 📦 категории -->
    <div class="filter-block">
      <p>📦 Категории</p>
      <div class="filters">
        <button
          v-for="c in categories"
          :key="c"
          @click="selectedCategory = c"
          :class="{ active: selectedCategory === c }"
        >
          {{ c }}
        </button>
      </div>
    </div>

    <!-- 🎨 цвет -->
    <div class="filter-block">
      <p>🎨 Фильтр по цвету</p>
      <div class="color-filters">
        <div
          v-for="c in colors"
          :key="c.name"
          class="color-circle"
          :class="{ active: selectedColor === c.value, all: c.isAll }"
          :style="!c.isAll ? { background: c.value } : {}"
          :title="c.name"
          @click="selectedColor = c.value"
        >
          <span v-if="c.isAll">✕</span>
        </div>
      </div>
    </div>

    <!-- 💰 цена -->
    <div class="filter-block">
      <p>💰 Фильтр по цене</p>
      <div class="price-filter">
        <input type="number" v-model="minPrice" placeholder="от" />
        <input type="number" v-model="maxPrice" placeholder="до" />
      </div>
      <input type="range" v-model="maxPrice" min="0" max="60000" class="range" />
    </div>

    <!-- ❌ нет товаров -->
    <p v-if="filteredProducts.length === 0" class="empty">
      ❌ Товар не найден
    </p>

    <!-- 🛒 карточки -->
    <div class="grid">
      <div
        v-for="p in filteredProducts"
        :key="p.id"
        class="card"
        @click="openProduct(p)"
      >
        <img :src="p.image" class="image" />

        <h3>{{ p.name }}</h3>
        <p class="price">{{ p.price }} ₽</p>

        <div class="card-color">
          <div
            class="color-circle small"
            :style="{ background: p.color }"
          ></div>
        </div>

        <button class="add-btn" @click.stop="addToCart(p)">
          В корзину 🛒
        </button>
      </div>
    </div>

    <!-- 🪟 модалка -->
    <div v-if="selectedProduct" class="modal-overlay" @click="closeModal">
      <div class="modal" @click.stop>
        <img :src="selectedProduct.image" class="modal-img" />

        <h2>{{ selectedProduct.name }}</h2>

        <p><b>Цена:</b> {{ selectedProduct.price }} ₽</p>
        <p><b>Описание:</b> {{ selectedProduct.description }}</p>
        <p><b>Категория:</b> {{ selectedProduct.category }}</p>

        <!-- 🎨 цвет -->
        <div class="modal-color">
          <b>Цвет:</b>
          <div
            class="color-circle small"
            :style="{ background: selectedProduct.color }"
          ></div>
          <span>{{ selectedProduct.colorName }}</span>
        </div>

        <!-- 📋 характеристики -->
        <div v-if="selectedProduct.specs" class="specs">
          <p><b>Характеристики:</b></p>
          <ul>
            <li v-for="(val, key) in selectedProduct.specs" :key="key">
              {{ key }}: {{ val }}
            </li>
          </ul>
        </div>

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
