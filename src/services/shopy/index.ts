import { env } from "app/config/env"
import { shoyfyUrl } from "./url"


export const getProducts = async () => {
    try {
        const resp = await fetch (shoyfyUrl.products.all,{
            headers: new Headers ({
                "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
            })
        })
        const data = await resp.json()
        return data.products
    } catch (error) {
        console.log(error)
    }
}