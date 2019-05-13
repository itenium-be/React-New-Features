import { CartModel, SockModel, SockVariantModel } from './models';

const cartContents: CartModel[] = [];

const CartRepository = {
    getCart(): CartModel[] {
        return cartContents;
    },

    getCartLength(): number {
        return cartContents.length;
    },

    addToCart(sock: SockModel, variant: SockVariantModel): void {
        sock.inventory--;   
        cartContents.push({sock, variant});
    }
};

export default CartRepository;