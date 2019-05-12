import React from 'react';
import { SockModel } from '../models';
import { Link } from 'react-router-dom';

type SockProps = {
    sock: SockModel
}

const SockLine: React.FC<SockProps> = ({ sock }) => {
    return (
        <Link to={'/socks/' + sock.id}>
            {sock.name}
        </Link>
    );
}

export default SockLine;
