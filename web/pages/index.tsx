import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Boomstick VC 💥</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Boomstick VC
        </h1>

        <p className={styles.description}>
          Make your startup go 💥 ... the good way!
        </p>

        <div className={styles.grid}>
          <a href="/blog" className={styles.card}>
            <h3>Blog</h3>
            <p>Read up!</p>
          </a>

          <a href="/team" className={styles.card}>
            <h3>Team</h3>
            <p>Who are we?</p>
          </a>

          <a
            href="/portfolio"
            className={styles.card}
          >
            <h3>Portfolio</h3>
            <p>Only the best.</p>
          </a>

          <a
            href="/contact"
            className={styles.card}
          >
            <h3>Contact</h3>
            <p>
              Get in touch!
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        &copy; Boomstick VC 2020
      </footer>
    </div>
  )
}
