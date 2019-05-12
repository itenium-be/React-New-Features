import { productList } from './assets/socks-data';
import { SockModel } from './models';

const TIMEOUT = 2500;

const empty = (): SockModel => ({
    id: 0,
    name: '',
    brand: '',
    price: 0,
    variants: [],
    inventory: 0,
    reviews: []
});


const ProductRepository = {
    getSock(sockId: number): SockModel {
        const sock = productList.find((s: SockModel) => s.id === sockId);
        return sock || empty();
    },

    getSockAsync(sockId: number): Promise<SockModel> {
        const sock = this.getSock(sockId);
        return new Promise(resolve => setTimeout(() => resolve(sock), TIMEOUT));
    }
};

export default ProductRepository;