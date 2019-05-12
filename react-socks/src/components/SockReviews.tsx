import React from 'react';
import ProductRepository from '../ProductRepository';
import { SockModel } from '../models';

type SockReviewsProps = {
    sock: SockModel
}

const SockReviews: React.FC<SockReviewsProps> = ({ sock }) => {
    return (
        <div className="review-form">
            REVIEWS: {sock.reviews.length}
        </div>
    );
}

export default SockReviews;
