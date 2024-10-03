import Image from "next/image"
import styles from '../sass/not-found.module.sass'
import Link from "next/link"
export default function globalError(){
    return(
        <main className={styles.NotFound}>
            <h1 className={styles.NotFound__title}> 404 </h1>
            <Image 
                src ='/images/404.png'
                width={500}
                height={300}
                alt="Error"
            />
            <h2 className={styles.NotFound__subtitle}> Page no was found!</h2>
            <p className={styles.NotFound__message}>Don't worry, our service is open 24/7  </p>
            <Link className={styles.NotFound__link} href="store"> Go to the Store shop</Link>
        </main>
    )
}