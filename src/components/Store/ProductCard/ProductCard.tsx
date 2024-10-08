import React from 'react';
import styles from './ProductCard.module.sass';
import Image from 'next/image';
import Link from 'next/link';
interface ProductCardProps {
    title: string;
    price: number;
    imageUrl: string;
    id: number;
    handle:string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ title, price, imageUrl, id, handle}) => {
    return (
        <Link  href={`/product/${handle}?id=${id}`} className={styles.card__link}>
            <div className={styles.card}>
            <Image src={imageUrl} alt={title} className={styles.image}  width={300} height={300}/>
            <h2 className={styles.title}>{title}</h2>
            {/* <p className={styles.price}>${price.toFixed(2)}</p> */}
            </div>
            <span className={styles.card__priceTag}>${price} USD</span>
        </Link>
    );
};


