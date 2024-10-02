import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './Loader.module.sass';


export const Loader = () => {
    return (
        <div className={styles.productCard}>
        <Skeleton height={200} />
        <h2 className={styles.productTitle}><Skeleton /></h2>
        <div className={styles.productDescription}><Skeleton count={3} /></div>
        <p className={styles.productVendor}><Skeleton width={100} /></p>
        <p className={styles.productTags}><Skeleton width={150} /></p>
        <p className={styles.productStatus}><Skeleton width={80} /></p>
        </div>
    );
};

