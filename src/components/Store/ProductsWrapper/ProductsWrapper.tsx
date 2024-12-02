import React from 'react';
import {ProductCard} from '../ProductCard/ProductCard';
import styles from './ProductsWrapper.module.sass';


interface Product {
    id: number;
    title: string;
    price: number;
    handle: string;
    imageUrl: { src: string }[];
    image:string;
}

interface ProductsWrapperProps {
    products: Product[];
}

export  const ProductsWrapper: React.FC<ProductsWrapperProps> = ({ products }) => {
    //const img= product.images[0]?.src
    return (
        <div className={styles.wrapper}>
        {products?.map(product => (
            <ProductCard
            key={product.id}
            title={product.title}
            handle={product.handle}
            id={product.id}
            price={product.price}
            imageUrl={product.image}
            />
        ))}
        </div>
    );
};


