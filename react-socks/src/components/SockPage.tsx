import React, { Fragment } from 'react';
import ProductRepository from '../ProductRepository';
import { SockModel, SockVariantModel } from '../models';
import SockReviews from './SockReviews';
import SockVariantSelector from './SockVariantSelector';
import SockInventory from './SockInventory';
import ErrorBoundary from './ErrorBoundary';

type SockPageProps = {
    match: { params: { id: string } }
}

const SockPage: React.FC<SockPageProps> = ({ match }) => {
    const sockId: number = parseInt(match.params.id, 10);
    const sock: SockModel = ProductRepository.getSock(sockId);
    const selectedVariant = sock.variants[0];

    return (
        <div className="product">
            <div className="product-image">
                <img src={`/assets/socks-${sock.brand}-${selectedVariant.color}.jpg`} />
            </div>
            <div className="product-info">
                <h1>{sock.name} (${sock.price})</h1>

                <ErrorBoundary fallback={<h2 className="error">Socks inventory service down!!</h2>}>
                    <SockInventory sock={sock} />
                </ErrorBoundary>

                <SockVariantSelector
                    sock={sock}
                    variant={selectedVariant}
                    setVariant={(newVariant: SockVariantModel) => console.log('selecting', newVariant)}
                />

                <SockReviews sock={sock} />
            </div>
        </div>
    );
}

export default SockPage;
