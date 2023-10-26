import {promises as fs} from 'fs'
import  {nanoid} from "nanoid";


class CartManager {
    constructor() {
        this.path = "./src/models/carts.json";
    }
    readCarts = async () => {
        let carts = await fs.readFile(this.path, "utf-8");
        return JSON.parse(carts);
    }
    
    writeCarts = async (cart) => {
        await fs.writeFile(this.path, JSON.stringify(cart));
    }

    addCarts = async () => {
        let cartsOld = await this.readCarts.Carts();
        let id = nanoid()
        let cartsConcat = [{id :id, products : []}, ...cartsOld]
        await this.writeCarts(cartsConcat)
        return "Carrito Agregado"
    }
}

export default CartManager

