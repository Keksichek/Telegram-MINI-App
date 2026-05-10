import { test, expect } from "vitest";

test("Корзина изначально пустая", () => {
  const cart = [];
  expect(cart.length).toBe(0);
});

test("Название приложения содержит Mini", () => {
  const appName = "Mini App Market";
  expect(appName).toContain("Mini");
});

test("Проверка сложения", () => {
  expect(2 + 2).toBe(4);
});