// import { get } from "http"
import Image from "next/image"
import styles from './MainProducts.module.sass';
import { getProducts } from "app/services/shopy/products";

export const MainProducts = async ()=>{
    const products =await getProducts()


    return(
        <section className={styles.MainProducts}>
            <h3>Main products</h3>
            <div className={styles.MainProducts__productList}>
                {products.length > 0 ? (
                    products.map((product:ProductType) => (
                        <article  key={product.id}>
                            <Image src={product.image} alt={product.title}  width={300} height={300} />
                            <h2 className={styles.productTitle}>{product.title}</h2>
                        </article>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>
        </section>
    )
}