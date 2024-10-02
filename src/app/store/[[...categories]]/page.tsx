interface CategoryProps {
    params:{
        categories:string[],
        searchParams?:string
    }
}

export default function category(props: CategoryProps){
    const {categories} =props.params
    return(
        <h1> Dynamic Category: {categories}</h1>
    ) 
}