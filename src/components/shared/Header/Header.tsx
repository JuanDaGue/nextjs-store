import { cookies } from 'next/headers';
import styles from './Header.module.sass'
import Link from "next/link";
import dynamic from 'next/dynamic'
const NoSSRShoppingCart = dynamic(() => import('../ShoppingCart'), { ssr: false })
export  const Header=()=>{
    const cookiesStore = cookies();
    const token = cookiesStore.get('accessToken')?.value;

    return (
        <header className={styles.Header}>
            <nav>
                <ul className={styles.Header__list}>
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/store"><li>Store</li></Link>
                </ul>
            </nav>
            <div className={styles.Header__user}>
                {token ? (<p>Hola!</p>) : (<Link href="/login">Login</Link>)}
                <NoSSRShoppingCart />
            </div>
        </header>

    )
}