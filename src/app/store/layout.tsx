import { getCollections } from "app/services/shopy/collections"
import Link from "next/link"
import styles from './sotreNav.module.sass'
import { ChatLink } from "../../components/Store/ChatLink"

interface Collection {
    id: string;
    handle: string;
    title: string;
}
export default async function Layout({ children }: { children: React.ReactNode }) {
    const collections = await getCollections()

    return (
        <main className={styles.StoreLayout}>
            <h1>Explore</h1>
            <nav>
            <ul className={styles.StoreLayout__list}>
                {
                collections.map((collection:Collection) => (
                    <Link key={collection.id} href={'/store/' + collection.handle} className={styles.StoreLayout__chip}>
                    {collection.title}
                    </Link>
                ))
                }
            </ul>
            <ChatLink />
            </nav>
            {children}
        </main>
    )
}