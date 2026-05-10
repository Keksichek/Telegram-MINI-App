<script setup>
import { ref } from "vue";
import { useCart } from "../store/cart";

const { totalPrice, cart, clearCart } = useCart();

const cardNumber = ref("");
const expiry = ref("");
const cvv = ref("");
const error = ref("");

// 💳 формат карты
function formatCard(value) {
  let v = value.replace(/\D/g, "").slice(0, 16);
  return v.replace(/(.{4})/g, "$1 ").trim();
}

// 📅 формат срока
function formatExpiry(value) {
  let v = value.replace(/\D/g, "").slice(0, 4);

  if (v.length >= 3) {
    return v.slice(0, 2) + "/" + v.slice(2);
  }

  return v;
}

// 💳 ввод
function onCardInput(e) {
  cardNumber.value = formatCard(e.target.value);
}

function onExpiryInput(e) {
  expiry.value = formatExpiry(e.target.value);
}

function onCvvInput(e) {
  cvv.value = e.target.value.replace(/\D/g, "").slice(0, 3);
}

// ✅ проверка
function validate() {
  const cardDigits = cardNumber.value.replace(/\s/g, "");

  if (cardDigits.length !== 16) {
    return "Номер карты должен содержать 16 цифр";
  }

  if (!/^\d{2}\/\d{2}$/.test(expiry.value)) {
    return "Введите срок в формате MM/YY";
  }

  const [month] = expiry.value.split("/");

  if (+month < 1 || +month > 12) {
    return "Некорректный месяц";
  }

  if (cvv.value.length !== 3) {
    return "CVV должен содержать 3 цифры";
  }

  return "";
}

// 💰 оплата
function pay() {
  const err = validate();

  if (err) {
    error.value = err;
    return;
  }

  error.value = "";

  const order = {
    cart: cart.value,
    total: totalPrice.value
  };

  console.log(order);

  alert("Оплата успешна 🎉");

  clearCart();
}
</script>

<template>
  <div class="payment-page">
    <div class="form">
      <h1>💳 Оплата</h1>

      <!-- 💳 карта -->
      <h3>Данные карты</h3>

      <!-- номер карты -->
      <div class="row">
        <input
          :value="cardNumber"
          @input="onCardInput"
          placeholder="1234 5678 9012 3456"
        />
      </div>

      <!-- срок + cvv -->
      <div class="row">
        <input
          :value="expiry"
          @input="onExpiryInput"
          placeholder="MM/YY"
        />

        <input
          :value="cvv"
          @input="onCvvInput"
          placeholder="CVV"
        />
      </div>

      <!-- ❗ ошибка -->
      <p v-if="error" class="error">{{ error }}</p>

      <!-- 💰 сумма -->
      <div class="total">
        Итого к оплате: <b>{{ totalPrice }} ₽</b>
      </div>

      <!-- кнопка -->
      <button @click="pay" class="pay-btn">
        Оплатить
      </button>
    </div>
  </div>
</template>