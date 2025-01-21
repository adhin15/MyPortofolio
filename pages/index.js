import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Homepage from "./homepage/homepage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://adhin.vercel.app/" />
        <meta property="og:type" content="Website" />
        <meta property="og:site_name" content="Adhin Alifarchan - My Works" />
        <meta property="og:title" content="Adhin Alifarchan - My Works" />
        <meta property="og:description" content="Welcome to Adhin's page" />
        <meta property="og:image" content="https://adhin.vercel.app/assets/thumbnail.png" />

        <title>Adhin Alifarchan - My Works</title>
        <meta name="description" content="Welcome to Adhin's page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="image" content="https://adhin.vercel.app/assets/moflix.jpg" />
        <link rel="icon" href="/logo/a-logo.png" />
        <link rel="stylesheet" href="/style.scss" />
        <link href="https://fonts.cdnfonts.com/css/montserrat" rel="stylesheet" />
      </Head>
      <Homepage />
    </>
  );
}
