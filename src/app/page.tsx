import { ProductGrid } from './components/ProductGrid/productGrid'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <ProductGrid/>
    </main>
  )
}
