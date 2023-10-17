import Image from 'next/image'
import styles from './page.module.css'
import { PrismicPreview } from '@prismicio/next'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        Hello
      </div>
    </main>
  )
}
