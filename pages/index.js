import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  var title = `Hello ${process.env.NEXT_PUBLIC_HELLO}`

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="integration-example-vercel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {title}
        </h1>
        <p>Change the value above in your .env* file</p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://dotenv.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
          <span className={styles.logo}>
            <Image src="/dotenv.png" alt="Dotenv Logo" width={16} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
