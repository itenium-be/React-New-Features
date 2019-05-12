import React from 'react';
import ProductRepository from '../ProductRepository';
import { SockModel } from '../models';

type SockPageProps = {
    match: {params: {id: string}}
}

const SockPage: React.FC<SockPageProps> = ({match}) => {
    const sockId: number = parseInt(match.params.id, 10);
    const sock: SockModel = ProductRepository.getSock(sockId);

    return (
        <div className="product">
            <div className="product-info">
                <h1>{sock.name}</h1>
            </div>
        </div>
    );
}

export default SockPage;
