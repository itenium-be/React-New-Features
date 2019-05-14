import { productList } from './socks-data';
import { SockModel } from '../models';

const empty = (): SockModel => ({
    id: 0,
    name: '',
    brand: '',
    price: 0,
    variants: [],
    inventory: 0,
    reviews: []
});

const favs: SockModel[] = [];


const ProductRepository = {
    getSock(sockId: number): SockModel {
        const sock = productList.find((s: SockModel) => s.id === sockId);
        return sock || empty();
    },

    favouriteSock(sock: SockModel): void {
        
    },
    getFavorites(): SockModel[] {
        return favs;
    },

    // getSockAsync(sockId: number): Promise<SockModel> {
    //     const TIMEOUT = 2500;
    //     const sock = this.getSock(sockId);
    //     return new Promise(resolve => setTimeout(() => resolve(sock), TIMEOUT));
    // }
};

export default ProductRepository;