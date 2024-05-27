import styles from './Home.module.css'
import { Articles } from './components/articles'

export type propTags = 'Economia' | 'Educação' | 'Diversidades'

export interface iArticles {
    id: number
    tag: propTags
    photo?: string
    title: string
    subtitle: string
    article: string
}

export function Home() {
    return (
        <div className={styles.homeContainer}>
            <section className={styles.publicityCard}>
                <h1 className={styles.publicityTitle}>Publicidade</h1>
            </section>
            <Articles />
        </div>
    )
}