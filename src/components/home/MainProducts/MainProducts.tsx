// import { get } from "http"
import Image from "next/image"
import styles from './MainProducts.module.sass';

const getProducts = async () => {
    try {
        const resp = await fetch (`${process.env.SHOPYFY_HOSTNAME}/admin/api/2024-10/products.json`,{
            headers: new Headers ({
                "X-Shopify-Access-Token": process.env.SHOPYFY_API_KEY || "",
            })
        })
        const data = await resp.json()
        return data.products
    } catch (error) {
        console.log(error)
    }
}
export const MainProducts = async ()=>{
    const products =await getProducts()
    console.log(typeof products)
    return(
        <section className={styles.MainProducts}>
            <h3>Main products</h3>
            <div className={styles.MainProducts__productList}>
                {products.length > 0 ? (
                    products.map((product) => (
                        <article  key={product.id}>
                            <Image src={product.images[0]?.src} alt={product.title}  width={300} height={300} />
                            <h2 className={styles.productTitle}>{product.title}</h2>
                            {/* <div className={styles.productDescription} dangerouslySetInnerHTML={{ __html: product.body_html }} />
                            <p className={styles.productVendor}>Vendor: {product.vendor}</p>
                            <p className={styles.productTags}>Tags: {product.tags}</p>
                            <p className={styles.productStatus}>Status: {product.status}</p> */}
                        </article>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>
        </section>
    )
}