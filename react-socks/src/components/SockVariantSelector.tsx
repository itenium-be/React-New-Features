import React from 'react';
import ProductRepository from '../ProductRepository';
import { SockModel, SockVariantModel } from '../models';
import cn from 'classnames';

type SockVariantSelectorProps = {
    sock: SockModel,
    variant: SockVariantModel,
    setVariant: Function
}

const SockVariantSelector: React.FC<SockVariantSelectorProps> = ({ sock, variant, setVariant }) => {
    return (
        <>
            {sock.variants.map(v => (
                <div
                    key={v.id}
                    className={cn('color-box', {active: v.id === variant.id})}
                    style={{backgroundColor: v.color}}
                    onMouseEnter={() => setVariant(v)}
                />
            ))}
        </>
    );
}

export default SockVariantSelector;
