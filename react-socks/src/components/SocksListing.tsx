import React from 'react';
import { productList } from '../assets/socks-data';
import { SockModel } from '../models';
import SockLine from './SockLine';

const SocksListing: React.FC = () => {
    return (
        <>
            {productList.map((sock: SockModel) => <SockLine key={sock.id} sock={sock} />)}
        </>
    );
}

export default SocksListing;
