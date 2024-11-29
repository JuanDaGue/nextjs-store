
interface ErrorPageProps {
    error: Error;
    reset: ()=> void;
}

interface CategoryProps {
    params:{
        categories:string[],
        searchParams?:string
    }
}



interface ProductType {
    id: number;
    title: string;
    body_html: string;
    vendor: string;
    product_type: string;
    created_at: string;
    handle: string;
    updated_at: string;
    published_at: string;
    template_suffix: any;
    published_scope: string;
    tags: string;
    status: string;
    admin_graphql_api_id: string;
    variants: Variant[];
    options: Option[];
    images: Image[];
    image: Image2;
    description: string;
    price: number;
    quantity: number;
}


interface Variant {
    id: number;
    product_id: number;
    title: string;
    price: string;
    sku: any;
    position: number;
    inventory_policy: string;
    compare_at_price: string;
    fulfillment_service: string;
    inventory_management: any;
    option1: string;
    option2: any;
    option3: any;
    created_at: string;
    updated_at: string;
    taxable: boolean;
    barcode: any;
    grams: number;
    image_id: any;
    weight: number;
    weight_unit: string;
    inventory_item_id: number;
    inventory_quantity: number;
    old_inventory_quantity: number;
    requires_shipping: boolean;
    admin_graphql_api_id: string;
}
interface Option {
    id: number;
    product_id: number;
    name: string;
    position: number;
    values: string[];
}

interface Image {
    id: number;
    alt: any;
    position: number;
    product_id: number;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
    width: number;
    height: number;
    src: string;
    variant_ids: any[];
}

interface Image2 {
    id: number;
    alt: any;
    position: number;
    product_id: number;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
    width: number;
    height: number;
    src: string;
    variant_ids: any[];
}

type CartItem = {
    title: string;
    price: number;
    quantity: number;
    id: string;
    image: string;
    merchandiseId: string;
}