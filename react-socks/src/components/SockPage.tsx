import React, {useState, useEffect} from 'react';
import ProductRepository from '../data/ProductRepository';
import { SockModel, SockVariantModel } from '../models';
import SockReviews from './SockReviews';
import SockVariantSelector from './SockVariantSelector';
import SockInventory from './SockInventory';
import ErrorBoundary from './ErrorBoundary';
import SockImage from './SockImage';

type SockPageProps = {
    match: { params: { id: string } }
}

const SockPage: React.FC<SockPageProps> = ({ match }) => {
    const sockId: number = parseInt(match.params.id, 10);
    const sock: SockModel = ProductRepository.getSock(sockId);
    const [selectedVariant, setSelectedVariant] = useState(sock.variants[0]);
    let oldTitle: string = document.title;

    useEffect(() => {
        document.title = `${oldTitle} - ${sock.name}`;

        return () => {
            document.title = oldTitle;
        }
    });

    return (
        <div className="product">
            <SockImage sock={sock} variant={selectedVariant} />
            
            <div className="product-info">
                <h1>{sock.name} (${sock.price})</h1>

                <ErrorBoundary fallback={<h2 className="error">Socks inventory service down!!</h2>}>
                    <SockInventory sock={sock} />
                </ErrorBoundary>

                <SockVariantSelector
                    sock={sock}
                    variant={selectedVariant}
                    setVariant={(newVariant: SockVariantModel) => setSelectedVariant(newVariant)}
                />

                <SockReviews sock={sock} />
            </div>
        </div>
    );
};

export default SockPage;
