import styles from './Home.module.css'
import { Articles } from './components/articles'
export function Home() {
    return (
        <div className={styles.headerContainer}>
            <section className={styles.publicityCard}>
                <h1 className={styles.publicityTitle}>Publicidade</h1>
            </section>
            <Articles />
        </div>
    )
}