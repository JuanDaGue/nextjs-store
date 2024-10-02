import Link from "next/link";
export  const Header=()=>{
    console.log('This is the Header component')
    return (
        <header>
            <nav>
                <Link href="/"><li>Home</li></Link>
                <Link href="/store"><li>Store</li></Link>
                <Link href="/category"><li>Categories</li></Link>

            </nav>
        </header>

    )
}