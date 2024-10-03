import { env } from "app/config/env"
export const shoyfyUrl ={
    products:{
        'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2024-10/products.json` 
    }
}