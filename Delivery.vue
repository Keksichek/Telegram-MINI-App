<script setup>
import { ref } from "vue";

// 👤 данные
const firstName = ref("");
const lastName = ref("");

// 📍 адрес
const country = ref("");
const region = ref("");
const city = ref("");
const street = ref("");
const house = ref("");
const apartment = ref("");
const entrance = ref("");

// 📅 дата и время
const date = ref("");
const time = ref("");

// ❗ ошибка
const error = ref("");

import { useRouter } from "vue-router";

const router = useRouter();
// отправка
function submit() {
  if (!firstName.value || !lastName.value || !city.value || !street.value || !house.value || !country.value || !region.value) {
    error.value = "Заполните обязательные поля";
    return;
  }

  error.value = "";

  const deliveryData = {
    name: `${firstName.value} ${lastName.value}`,
    address: `${country.value}, ${region.value}, ${city.value}, ${street.value}, ${house.value}, кв.${apartment.value}, подъезд ${entrance.value}`,
    date: date.value,
    time: time.value
  };

  console.log(deliveryData);

  router.push("/payment");
}
</script>

<template>
  <div class="delivery-page">
    <div class="form">
      <h1>🚚 Доставка</h1>

      <!-- 👤 ФИО -->
      <h3>Контактные данные</h3>
      <div class="row">
        <input v-model="firstName" placeholder="Имя *" />
        <input v-model="lastName" placeholder="Фамилия *" />
      </div>

      <!-- 📍 АДРЕС -->
      <h3>Адрес доставки</h3>

      <div class="row">
        <input v-model="country" placeholder="Страна*" />
        <input v-model="region" placeholder="Регион*" />
      </div>

      <div class="row">
        <input v-model="city" placeholder="Город *" />
        <input v-model="street" placeholder="Улица *" />
      </div>

      <div class="row">
        <input v-model="house" placeholder="Дом *" />
        <input v-model="apartment" placeholder="Квартира" />
        <input v-model="entrance" placeholder="Подъезд" />
      </div>

      <!-- 📅 ВРЕМЯ -->
      <h3>Дата и время доставки</h3>

      <div class="row">
        <input type="date" v-model="date" />
        <input type="time" v-model="time" />
      </div>

      <!-- ❗ ошибка -->
      <p v-if="error" class="error">{{ error }}</p>

      <!-- кнопка -->
      <button @click="submit" class="submit-btn">
        Перейти к оплате
      </button>
    </div>
  </div>
</template>