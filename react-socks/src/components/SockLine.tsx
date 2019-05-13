import React from 'react';
import { SockModel } from '../models';
import { Link } from 'react-router-dom';
import SockFavourite from './SockFavourite';

type SockProps = {
    sock: SockModel
}

const SockLine: React.FC<SockProps> = ({ sock }) => {
    return (
        <div className="product-line">
            <SockFavourite sock={sock} />
            <h2>
                {sock.name}
            </h2>
            <Link to={'/socks/' + sock.id}>
                <button>Details</button>
            </Link>
        </div>
    );
}

export default SockLine;
