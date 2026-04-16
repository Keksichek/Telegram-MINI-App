from flask import Flask, jsonify, request

app = Flask(__name__)

# ===== Каталог товаров =====
catalog = [
    {"id": 1, "name": "Футболка", "price": 1000, "category": "Одежда"},
    {"id": 2, "name": "Кроссовки", "price": 5000, "category": "Обувь"},
    {"id": 3, "name": "Куртка", "price": 7000, "category": "Одежда"},
    {"id": 4, "name": "Рюкзак", "price": 3000, "category": "Аксессуары"},
    {"id": 5, "name": "Кепка", "price": 800, "category": "Аксессуары"}
]

# ===== Получить весь каталог =====
@app.route("/catalog", methods=["GET"])
def get_catalog():
    return jsonify(catalog)

# ===== Получить товар по ID =====
@app.route("/catalog/<int:item_id>", methods=["GET"])
def get_item(item_id):
    for item in catalog:
        if item["id"] == item_id:
            return jsonify(item)
    return jsonify({"error": "Товар не найден"}), 404

# ===== Фильтр по категории =====
@app.route("/catalog/filter", methods=["GET"])
def filter_catalog():
    category = request.args.get("category")

    if not category:
        return jsonify({"error": "Не указана категория"}), 400

    filtered = [item for item in catalog if item["category"] == category]
    return jsonify(filtered)

# ===== Главная страница =====
@app.route("/")
def home():
    return "Mini App Catalog API работает!"

# ===== Запуск =====
if __name__ == "__main__":
    app.run(debug=True)
    
