var Product = /** @class */ (function () {
    function Product(id, name) {
        this.id = id;
        this.name = name;
    }
    Object.defineProperty(Product.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "rest", {
        get: function () {
            return this._rest;
        },
        set: function (value) {
            this._rest = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.addToCart = function (cart, quantity) {
        cart.unshift({ id: this.id, quantity: quantity });
    };
    Product.prototype.addToFavorites = function (favorites) {
        favorites.unshift(this.id);
    };
    return Product;
}());
