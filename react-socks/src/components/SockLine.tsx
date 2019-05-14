import React from 'react';
import { SockModel } from '../models';
import { Link } from 'react-router-dom';
import SockFavourite from './SockFavourite';

import CartRepository from './../data/CartRepository';
import SockImage from './SockImage';

type SockProps = {
    sock: SockModel
}

const SockLine: React.FC<SockProps> = ({ sock }) => {
    return (
        <div className="product-line">
            <SockFavourite sock={sock} />
            <h2>
                {sock.name} (€{sock.price} )
            </h2>
                { CartRepository.isInCard(sock) ?
                    <i className="fas fa-shopping-cart"></i> :
                    <></>
                }
            <Link to={'/socks/' + sock.id}>
                <button>Details</button>
            </Link>
            <SockImage sock={sock} variant={sock.variants[0]} />
        </div>
    );
}

export default SockLine;
