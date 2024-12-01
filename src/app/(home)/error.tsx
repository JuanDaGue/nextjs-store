"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: ErrorPageProps) {
    useEffect(() => {
        console.log(error);
    }, [error]);
    
    return (
        <div style={{ padding: '10rem' }}>
            <h1>:c</h1>
            <p>Something was wrong</p>
            <button onClick={reset}>Try again</button>
        </div>
    );
}
