class Product {
    private _id: number;
    private _name: string;
    private _rest: number;
    private _price: number;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    get id() {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get rest() {
        return this._rest;
    }

    set rest(value: number) {
        this._rest = value;
    }

    get price() {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    public addToCart(cart: { id: number, quantity: number }[], quantity: number) {
        cart.unshift({ id: this.id, quantity });
    }

    public addToFavorites(favorites: number[]) {
        favorites.unshift(this.id);
    }
}