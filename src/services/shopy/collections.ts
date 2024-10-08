import { env } from "app/config/env"
import { shoyfyUrl } from "./url"


export const getCollections = async () => {
    try {
        const resp = await fetch (shoyfyUrl.collections.all,{
            headers: new Headers ({
                "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
            })
        })
        const { smart_collections }= await resp.json()
        const tranfCollection = smart_collections.map((elem:any)=>{
            return { 
                id: elem.id,
                title: elem.title,
                handle: elem.handle
            }
        })
        return tranfCollection
    } catch (error) {
        console.log(error)
    }
}


export const getCollection = async (id:number) => {
    try {
        const resp = await fetch (shoyfyUrl.collections.collection(id),{
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