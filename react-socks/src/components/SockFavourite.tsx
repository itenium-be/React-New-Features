import React from 'react';
import { SockModel } from '../models';
import './SockFavourite.scss';

type SockProps = {
    sock: SockModel
}

const SockFavourite: React.FC<SockProps> = ({ sock }) => {
    // Solid star: fas fa-star
    return (
        <span className="favourite">
            <i className="far fa-star" />
        </span>
    );
}

export default SockFavourite;
