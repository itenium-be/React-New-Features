import React from 'react';
import { SockModel } from '../models';
import SockReviewForm from './SockReviewForm';

type SockReviewsProps = {
    sock: SockModel
}

const SockReviews: React.FC<SockReviewsProps> = ({ sock }) => {
    return (
        <>
            <SockReviewForm sock={sock} />
            <SockReviewsDisplay sock={sock} />
        </>
    );
}



const SockReviewsDisplay: React.FC<SockReviewsProps> = ({ sock }) => {
    return (
        <div className="reviews">
            REVIEWS: {sock.reviews.length}
        </div>
    );
}


export default SockReviews;
