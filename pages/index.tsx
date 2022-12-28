import 'global'
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header title='Home' content='mattz-code homepage' />
      <Navbar />
      <main>
        <h2 className={inter.className}>mattz-code</h2>
      </main>
    </>
  );
}
