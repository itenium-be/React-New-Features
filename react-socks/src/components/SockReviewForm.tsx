import React from 'react';
import { SockModel/*, SockReviewModel*/ } from '../models';
// import { Formik } from 'formik';

type SockReviewsProps = {
    sock: SockModel
}

// See Forms.jsx for some inspiration?
// Or skip right into using a full fledged Forms package instead?
// https://github.com/jaredpalmer/formik

const SockReviewForm: React.FC<SockReviewsProps> = ({ sock }) => {
    return (
        <div className="review-form">
            
        </div>
    );
}


export default SockReviewForm;
