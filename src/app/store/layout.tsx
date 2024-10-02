export default function Layout({children}:{children: React.ReactNode}){
    return (
        <main>
            <nav>Category navigation</nav>
                {children}
        </main>
    )
}
