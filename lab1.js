class Product {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get rest() {
        return this._rest;
    }
    set rest(value) {
        this._rest = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    addToCart(cart, quantity) {
        cart.unshift({ id: this.id, quantity });
    }
    addToFavorites(favorites) {
        favorites.unshift(this.id);
    }
}
