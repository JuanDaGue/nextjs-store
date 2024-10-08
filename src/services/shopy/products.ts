import { env } from "app/config/env"
import { shoyfyUrl } from "./url"


export const getProducts = async (id?: string): Promise<ProductType[]> => {
    try {
        const apiurl = id? `${shoyfyUrl.products.all}?ids=${id}`: shoyfyUrl.products.all
        const resp = await fetch (apiurl,{
            headers: new Headers ({
                "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
            })
        })
        const { products } = await resp.json()
        const transformedProducts = products.map((product: any) => {
            return {
                id: product.id,
                gql_id: product.variants[0].admin_graphql_api_id,
                title: product.title,
                description: product.body_html,
                price: product.variants[0].price,
                image: product.images[0].src,
                quantity: product.variants[0].inventory_quantity,
                handle: product.handle,
                tags: product.tags,
                }
        })
        return transformedProducts

    } catch (error) {
        console.log(error)
    }
}