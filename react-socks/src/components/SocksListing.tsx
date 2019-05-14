import React from 'react';
import { productList } from '../data/socks-data';
import { SockModel } from '../models';
import SockLine from './SockLine';

const SocksListing: React.FC = () => {
    return (
        <div className="product-listing">
            {productList.map((sock: SockModel) => <SockLine key={sock.id} sock={sock} />)}
        </div>
    );
}

export default SocksListing;
