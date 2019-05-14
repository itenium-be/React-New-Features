import { CartModel, SockModel, SockVariantModel } from '../models';

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
    },

    isInCard(sock: SockModel) {
        return cartContents.map(x => x.sock).indexOf(sock) !== -1;
    }
};

export default CartRepository;