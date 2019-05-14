import React from 'react';
import { SockModel, SockVariantModel } from '../models';

type SockProps = {
    sock: SockModel,
    variant: SockVariantModel
}

const SockImage: React.FC<SockProps> = ({ sock, variant }) => {
    return (
        <div className="product-image">
            <img src={`/assets/socks-${sock.brand}-${variant.color}.jpg`} alt="Sock Variant" />
        </div>
    );
}

export default SockImage;
