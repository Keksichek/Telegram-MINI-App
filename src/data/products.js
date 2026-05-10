export const products = [
  // 🛋 ДИВАНЫ
  {
    id: 1,
    name: "Диван Modern Soft",
    price: 45990,
    category: "Диваны",
    color: "#808080",
    colorName: "Серый",
    description: "Современный мягкий диван для гостиной",
    image: "/img/modernsoft.jpg",
    isNew: true,
    specs: {
      Материал: "Ткань",
      Ширина: "220 см",
      Механизм: "Еврокнижка"
    }
  },
  {
    id: 2,
    name: "Диван Loft Comfort",
    price: 38990,
    category: "Диваны",
    color: "#8b4513",
    colorName: "Коричневый",
    description: "Диван в стиле лофт с жестким каркасом",
    image: "/img/2.jpg",
    isNew: false,
    specs: {
      Материал: "Велюр",
      Ширина: "200 см",
      Механизм: "Книжка"
    }
  },
  {
    id: 3,
    name: "Диван Cloud Relax",
    price: 52990,
    category: "Диваны",
    color: "#f5f5dc",
    colorName: "Бежевый",
    description: "Очень мягкий диван для максимального комфорта",
    image: "/img/3.jpg",
    isNew: true,
    specs: {
      Материал: "Кожа",
      Ширина: "240 см",
      Наполнение: "ППУ"
    }
  },
  {
    id: 4,
    name: "Диван Compact Mini",
    price: 29990,
    category: "Диваны",
    color: "#2f4f4f",
    colorName: "Темный",
    description: "Компактный диван для небольших помещений",
    image: "/img/4.jpg",
    isNew: false,
    specs: {
      Материал: "Ткань",
      Ширина: "180 см",
      Механизм: "Без раскладки"
    }
  },

  // 🪑 КРЕСЛА
  {
    id: 5,
    name: "Кресло Lounge",
    price: 12990,
    category: "Кресла",
    color: "#f5f5dc",
    colorName: "Бежевый",
    description: "Стильное кресло для отдыха",
    image: "/img/5.jpg",
    isNew: true,
    specs: {
      Материал: "Велюр",
      Высота: "100 см"
    }
  },
  {
    id: 6,
    name: "Кресло Relax Pro",
    price: 15990,
    category: "Кресла",
    color: "#808080",
    colorName: "Серый",
    description: "Кресло с удобной спинкой",
    image: "/img/6.jpg",
    isNew: false,
    specs: {
      Материал: "Ткань",
      Подлокотники: "Есть"
    }
  },
  {
    id: 7,
    name: "Кресло Classic Wood",
    price: 10990,
    category: "Кресла",
    color: "#8b4513",
    colorName: "Дерево",
    description: "Классическое кресло с деревянным каркасом",
    image: "/img/7.jpg",
    isNew: false,
    specs: {
      Материал: "Дерево",
      Обивка: "Кожа"
    }
  },
  {
    id: 8,
    name: "Кресло Soft Dream",
    price: 13990,
    category: "Кресла",
    color: "#8b4513",
    colorName: "Коричневый",
    description: "Мягкое кресло для дома",
    image: "/img/8.jpg",
    isNew: true,
    specs: {
      Материал: "Велюр",
      Наполнение: "ППУ"
    }
  },

  // 💻 ОФИСНЫЕ КРЕСЛА
  {
    id: 9,
    name: "Офисное кресло Ergo",
    price: 17990,
    category: "Офисные кресла",
    color: "#000000",
    colorName: "Черный",
    description: "Эргономичное кресло для работы",
    image: "/img/9.jpg",
    isNew: true,
    specs: {
      Регулировка: "Есть",
      Подголовник: "Есть"
    }
  },
  {
    id: 10,
    name: "Офисное кресло Comfort",
    price: 14990,
    category: "Офисные кресла",
    color: "#808080",
    colorName: "Серый",
    description: "Комфортное кресло для офиса",
    image: "/img/10.jpg",
    isNew: false,
    specs: {
      Регулировка: "Есть",
      Колеса: "Да"
    }
  },
  {
    id: 11,
    name: "Офисное кресло Premium",
    price: 21990,
    category: "Офисные кресла",
    color: "#2f4f4f",
    colorName: "Темный",
    description: "Премиальное кресло с поддержкой спины",
    image: "/img/11.jpg",
    isNew: true,
    specs: {
      Материал: "Экокожа",
      Подголовник: "Есть"
    }
  },
  {
    id: 12,
    name: "Офисное кресло Basic",
    price: 9990,
    category: "Офисные кресла",
    color: "#696969",
    colorName: "Темно-серый",
    description: "Бюджетное офисное кресло",
    image: "/img/12.jpg",
    isNew: false,
    specs: {
      Регулировка: "Минимальная",
      Материал: "Ткань"
    }
  },

  // 🛏 КРОВАТИ
  {
    id: 13,
    name: "Кровать Soft Sleep",
    price: 55990,
    category: "Кровати",
    color: "#f5f5dc",
    colorName: "Бежевый",
    description: "Мягкая кровать с высоким изголовьем",
    image: "/img/13.jpg",
    isNew: true,
    specs: {
      Размер: "200x160",
      Основание: "Ортопедическое"
    }
  },
  {
    id: 14,
    name: "Кровать Nordic Wood",
    price: 48990,
    category: "Кровати",
    color: "#8b4513",
    colorName: "Дерево",
    description: "Деревянная кровать в скандинавском стиле",
    image: "/img/14.jpg",
    isNew: false,
    specs: {
      Материал: "Дерево",
      Размер: "200x180"
    }
  },
  {
    id: 15,
    name: "Кровать Minimal",
    price: 39990,
    category: "Кровати",
    color: "#2f4f4f",
    colorName: "Темный",
    description: "Минималистичная кровать",
    image: "/img/15.jpg",
    isNew: true,
    specs: {
      Размер: "200x140",
      Каркас: "Металл"
    }
  },
  {
    id: 16,
    name: "Кровать Classic",
    price: 45990,
    category: "Кровати",
    color: "#d2b48c",
    colorName: "Светлое дерево",
    description: "Классическая кровать",
    image: "/img/16.jpg",
    isNew: false,
    specs: {
      Материал: "Дерево",
      Размер: "200x160"
    }
  },

  // 🗄 ШКАФЫ
  {
    id: 17,
    name: "Шкаф Modern",
    price: 34990,
    category: "Шкафы",
    color: "#ffffff",
    colorName: "Белый",
    description: "Современный шкаф-купе",
    image: "/img/17.jpg",
    isNew: true,
    specs: {
      Двери: "Раздвижные",
      Высота: "220 см"
    }
  },
  {
    id: 18,
    name: "Шкаф Classic",
    price: 28990,
    category: "Шкафы",
    color: "#8b4513",
    colorName: "Дерево",
    description: "Классический шкаф",
    image: "/img/18.jpg",
    isNew: false,
    specs: {
      Двери: "Распашные",
      Полки: "Есть"
    }
  },
  {
    id: 19,
    name: "Шкаф Minimal",
    price: 25990,
    category: "Шкафы",
    color: "#808080",
    colorName: "Серый",
    description: "Минималистичный шкаф",
    image: "/img/19.jpg",
    isNew: true,
    specs: {
      Двери: "Раздвижные",
      Высота: "200 см"
    }
  },
  {
    id: 20,
    name: "Шкаф Loft",
    price: 31990,
    category: "Шкафы",
    color: "#2f4f4f",
    colorName: "Темный",
    description: "Шкаф в стиле лофт",
    image: "/img/20.jpg",
    isNew: false,
    specs: {
      Материал: "Металл+дерево",
      Полки: "Есть"
    }
  },

  // 🪑 СТУЛЬЯ
  {
    id: 21,
    name: "Стул Classic",
    price: 3990,
    category: "Стулья",
    color: "#8b4513",
    colorName: "Дерево",
    description: "Классический деревянный стул",
    image: "/img/21.jpg",
    isNew: false,
    specs: {
      Материал: "Дерево"
    }
  },
  {
    id: 22,
    name: "Стул Soft",
    price: 5990,
    category: "Стулья",
    color: "#f5f5dc",
    colorName: "Бежевый",
    description: "Мягкий стул",
    image: "/img/22.jpg",
    isNew: true,
    specs: {
      Обивка: "Велюр"
    }
  },
  {
    id: 23,
    name: "Стул Modern",
    price: 4990,
    category: "Стулья",
    color: "#808080",
    colorName: "Серый",
    description: "Современный стул",
    image: "/img/23.jpg",
    isNew: false,
    specs: {
      Материал: "Пластик"
    }
  },
  {
    id: 24,
    name: "Стул Loft",
    price: 5490,
    category: "Стулья",
    color: "#2f4f4f",
    colorName: "Темный",
    description: "Стул в стиле лофт",
    image: "/img/24.jpg",
    isNew: true,
    specs: {
      Материал: "Металл"
    }
  },

  // 🪵 СТОЛЫ
  {
    id: 25,
    name: "Стол Nordic",
    price: 24990,
    category: "Столы",
    color: "#8b4513",
    colorName: "Дерево",
    description: "Скандинавский стол",
    image: "/img/25.jpg",
    isNew: true,
    specs: {
      Длина: "140 см"
    }
  },
  {
    id: 26,
    name: "Стол Minimal",
    price: 19990,
    category: "Столы",
    color: "#808080",
    colorName: "Серый",
    description: "Минималистичный стол",
    image: "/img/26.jpg",
    isNew: false,
    specs: {
      Материал: "Металл"
    }
  },
  {
    id: 27,
    name: "Стол Office",
    price: 21990,
    category: "Столы",
    color: "#ffffff",
    colorName: "Белый",
    description: "Офисный стол",
    image: "/img/27.jpg",
    isNew: true,
    specs: {
      Ширина: "120 см"
    }
  },
  {
    id: 28,
    name: "Стол Loft",
    price: 26990,
    category: "Столы",
    color: "#2f4f4f",
    colorName: "Темный",
    description: "Стол в стиле лофт",
    image: "/img/28.jpg",
    isNew: false,
    specs: {
      Материал: "Металл+дерево"
    }
  }
];