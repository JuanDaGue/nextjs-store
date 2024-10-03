import styles from './Header.module.css'
import Link from "next/link";
export  const Header=()=>{
    return (
        <header>
            <nav>
                <ul className= {styles.Header__list}>
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/store"><li>Store</li></Link>
                    <Link href="/category"><li>Categories</li></Link>
                </ul>

            </nav>
        </header>

    )
}