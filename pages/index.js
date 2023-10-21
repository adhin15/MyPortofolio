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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />\
        <link rel="stylesheet" href="/style.scss" />
        <link href="https://fonts.cdnfonts.com/css/montserrat" rel="stylesheet"/>
      </Head>
      <Homepage/>
    </>
  );
}
