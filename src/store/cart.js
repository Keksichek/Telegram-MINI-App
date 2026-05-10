import { ref, computed } from "vue";

// 🛒 глобальная корзина
const cart = ref([]);

// ➕ добавить товар
function addToCart(product) {
  const existing = cart.value.find(item => item.id === product.id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.value.push({ ...product, quantity: 1 });
  }
}

// ➕ увеличить
function increase(item) {
  item.quantity++;
}

// ➖ уменьшить
function decrease(item) {
  const existing = cart.value.find(p => p.id === item.id);

  if (!existing) return;

  if (existing.quantity > 1) {
    existing.quantity--;
  } else {
    cart.value = cart.value.filter(p => p.id !== item.id);
  }
}

// 🧹 очистка
function clearCart() {
  cart.value = [];
}

// 💰 сумма
const totalPrice = computed(() => {
  return cart.value.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
});

function removeItem(item) {
  cart.value = cart.value.filter(p => p.id !== item.id);
}

// экспорт
export function useCart() {
  return {
    cart,
    addToCart,
    increase,
    decrease,
    clearCart,
    totalPrice,
    removeItem
  };
}

