import { env } from "app/config/env"
export const shoyfyUrl ={
    products:{
        'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2024-10/products.json` 
    },
    collections:{
        'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2024-10/smart_collections.json`,
        'collection':( id:number)=> `${env.SHOPIFY_HOSTNAME}/admin/api/2024-10/collections/${id}/products.json`,
    }
}