/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Kaly's portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <a href="/cv.pdf" download className="btn">
            <p>Download CV</p>
          </a>
          <div
            style={{
              fontWeight: "bold",
              color: "rgb(144, 202, 249)",
              fontSize: 16,
            }}
          >
            {/* <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            > */}
            FullStack Developer Jr
            {/* <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              /> */}
            {/* </a> */}
          </div>
        </div>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/perfil_kaly.jpeg"
            alt="Next.js Logo"
            width={220}
            height={220}
            priority
          />
        </div>
        <div className={styles.center} style={{ marginTop: "25px" }}>
          <h2>Hello world, I'm Kaly</h2>
          <div className={styles.thirteen}>
            <h1>:)</h1>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around"}}>
          <div style={{ marginRight: "10px", textAlign: "center", paddingRight: '10px' }}>
            <p style={{ fontWeight: "bold", color: "rgb(144, 202, 249)" }}>
              Frontend Development
            </p>
            <p style={{ margin: "0px 0px 15px 0px" }}>
              HTML - CSS - Javascript - React - NextJs - Bootstrap - MaterialUi{" "}
            </p>
          </div> 
          <div style={{ textAlign: "center", marginLeft: '10px', paddingLeft: '10px' }}>
            <p
              style={{
                fontWeight: "bold",
                color: "rgb(144, 202, 249)",
              }}
            >
              Backend Development
            </p>
            <p style={{ margin: "0px 0px 30px 0px" }}>
              Java - SpringBoot - TDD - PostgreeSQL - MySQL - Docker - AWS(S3){" "}
            </p>
          </div>
        </div>
        <div className={styles.grid}>
          <Link
            href="/experience"
            className={styles.card}
            // target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Experience <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              My trajectory in the IT area and my professional experience
              history.
            </p>
          </Link>

          <Link
            href="/certificates"
            className={styles.card}
            // target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Graduation and certificates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              My main formations and what I'm studying now.
            </p>
          </Link>

          <Link
            href="/projects"
            className={styles.card}
            // target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Projects <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              My recent projects in front-end and back-end.
            </p>
          </Link>

          <Link
            href="contact"
            className={styles.card}
            // target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Contact <span>-&gt;</span>
            </h2>
            <p className={inter.className}>My contact networks</p>
          </Link>
        </div>
      </main>
    </>
  );
}
