import React from 'react';
import { SockModel } from '../models';
import { Link } from 'react-router-dom';

type SockProps = {
    sock: SockModel
}

const SockLine: React.FC<SockProps> = ({ sock }) => {
    return (
        <div className="product-line">
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
