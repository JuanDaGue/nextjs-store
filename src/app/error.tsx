"use client";
import Image from "next/image";
import styles from '../sass/global-error.module.sass';

export default function globalError({ reset }: ErrorPageProps) {
    return (
        <main className={styles.Error}>
            <h1 className={styles.Error__title}>An error has occurred</h1>
            <Image 
                src='/images/error.png'
                width={500}
                height={300}
                alt="Error"
            />
            <p className={styles.Error__message}>Something went wrong! Don&apos;t worry</p>
            <button onClick={reset} className={styles.Error__button}>Try again</button>
        </main>
    );
}
