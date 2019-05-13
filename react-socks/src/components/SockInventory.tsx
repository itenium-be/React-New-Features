import React, { Fragment } from 'react';
import cn from 'classnames';
import { SockModel } from '../models';
import ErrorBoundary from './ErrorBoundary';

const ErrorBoundaryTesting = false;

type SockInventoryProps = {
    sock: SockModel
}

const SockInventory: React.FC<SockInventoryProps> = ({ sock }) => {
    if (ErrorBoundaryTesting) {
        throw new Error('uhoh');
    }

    return (
        <>
            {sock.inventory > 0 ? (
                <React.Fragment>{sock.inventory} left in stock</React.Fragment>
            ) : (
                <Fragment>Out of stock</Fragment>
            )}

            <button
                className={cn('add-to-cart', { disabledButton: sock.inventory <= 0 })}
                onClick={() => sock.inventory--}
            >
                Add to cart
            </button>
        </>
    );
}

export default SockInventory;
