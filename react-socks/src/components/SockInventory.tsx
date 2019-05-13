import React/*, { Fragment }*/ from 'react';
import cn from 'classnames';
import { SockModel } from '../models';

const ErrorBoundaryTesting = false;

type SockInventoryProps = {
    sock: SockModel
}

const SockInventory: React.FC<SockInventoryProps> = ({ sock }) => {
    if (ErrorBoundaryTesting) {
        throw new Error('uhoh');
    }

    return (
        <div>
            {sock.inventory > 0 ? (
                <div>{sock.inventory} left in stock</div>
            ) : (
                <div>Out of stock</div>
            )}

            <button
                className={cn('add-to-cart', { disabledButton: sock.inventory <= 0 })}
                onClick={() => sock.inventory--}
            >
                Add to cart
            </button>
        </div>
    );
}

export default SockInventory;

// TODO: The button onClick handler does a `sock.inventory--`
// This is a direct mutation of state; React does not realise
// this, so the stock is only updated by switching views    :
// Use the back button and click same socks "Details" button.