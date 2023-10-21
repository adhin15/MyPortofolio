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
        <title>Adhin Alifarchan - My Works</title>
        <meta name="description" content="Welcome to Adhin's page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/a-logo.png" />
        <link rel="stylesheet" href="/style.scss" />
        <link href="https://fonts.cdnfonts.com/css/montserrat" rel="stylesheet"/>
      </Head>
      <Homepage/>
    </>
  );
}
