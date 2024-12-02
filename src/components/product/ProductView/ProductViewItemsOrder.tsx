"use client";
import { SyntheticEvent, useState } from "react";
import { FaCartShopping } from 'react-icons/fa6';
import styles from "./ProductViewItemsOrder.module.sass";
import { useShoppingCart } from "app/hooks/useShoppingCart";

interface ProductViewItemsOrderProps {
    maxQuantity: number,
    product: ProductType
}

export const ProductViewItemsOrder = ({ maxQuantity, product }: ProductViewItemsOrderProps) => {
    const [counter, setCounter] = useState(1);
    const { addToCart } = useShoppingCart();
    
    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
    };

    const handleSubtract = (event: SyntheticEvent) => {
        event.preventDefault();
        if (counter === 1) return;
        setCounter(counter - 1);
    };

    const handleAdd = (event: SyntheticEvent) => {
        event.preventDefault();
        if (counter === maxQuantity) return;
        setCounter(counter + 1);
    };

    const handleAddToCart = (event: SyntheticEvent) => {
        event.preventDefault();
        addToCart({
            title: product.title,
            price: product.price,
            quantity: counter,
            id: product.id.toString(),  // Ensure id is a string
            image: product.image.src,   // Ensure image is a string URL
            merchandiseId: product.admin_graphql_api_id  // Ensure gql_id is correct
        });
    };

    return (
        <div className={styles.ProductViewItemsOrder}>
            <div className={styles.ProductViewItemsOrder__itemsCount}>
                <button onClick={handleSubtract}>-</button>
                <p>{counter}</p>
                <button onClick={handleAdd}>+</button>
            </div>
            <form
                onSubmit={handleSubmit}
                className={styles.ProductViewItemsOrder__form}
            >
                <button
                    className={styles.ProductViewItemsOrder__submit}
                    type="submit"
                    onClick={handleAddToCart}
                >
                    <FaCartShopping />
                    <span>Add to cart</span>
                </button>
            </form>
        </div>
    );
};
