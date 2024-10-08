
import { MainProducts } from "app/components/home/MainProducts";
import { Metadata } from "next";

export const metadata: Metadata ={
  title:'⚜ Future world',
  description: "Welcome to the jungle, and ecomerce form other century ",
  keywords: ["ecomerce","future","world"],
}

export default function Home() {
  return (
      <main >
        <MainProducts/>
      </main>
  );
}
