import Head from "next/head";
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <>
      <Head>
        <title>Noah Hyatt Photography</title>
        <link rel="shortcut icon" type="image/png" href="/favicon-black.png" />
      </Head>

      <main className="h-screen">
        <Navbar />
      </main>
    </>
  );
}
