import { Description } from "app/components/home/Description";
import { ProductView } from "app/components/product/ProductView";
import { getProducts } from "app/services/shopy/products";
import { redirect } from "next/navigation";

interface ProductPageProps {
    searchParams: {
        id: string
        }
    }
export async function generateMetadata({ searchParams }: ProductPageProps) {
    const id = searchParams.id
    const products = await getProducts(id)
    const product = products[0]
    return{
        title: product.title,
        description: product.description,
        keywords: product.tags,
        openGraph: [product.image]
    }
}    

export default async function ProductPage({ searchParams }: ProductPageProps) {
    const id = searchParams.id
    const products = await getProducts(id)
    const product = products[0]
    if(!id){
        redirect('/store')
    }
    return <ProductView product={product} />
}  