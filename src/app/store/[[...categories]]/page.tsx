import { ProductsWrapper } from "app/components/Store/ProductsWrapper"
import { getCollections } from "app/services/shopy/collections"
import { getCollection } from "app/services/shopy/collections"
import { getProducts } from "app/services/shopy/products"

export default  async function category(props: CategoryProps){
    const {categories} =props.params
    const collections = await  getCollections() 
    let products=[];
    if(categories?.length>0){
        const selectCollection = collections.find((elem: any) => {
            return elem.handle === categories[0];
        });

        products = await  getCollection(selectCollection.id)
        console.log(products) 
    }
    else{
        products= await getProducts()
    }
    return(
        <div>
            <h1> Dynamic Category: {categories}</h1>
            <ProductsWrapper products={products} />
        </div>
            
    ) 
}