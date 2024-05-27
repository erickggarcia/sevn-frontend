import styles from './SecondaryArticles.module.css'
import { iArticles } from '../../..'

interface iTagColors {
    Economia: string
    Educação: string
    Diversidades: string
}

interface MainArticlesProps {
    secondaryArticles: iArticles[]
    tagColors: iTagColors
}

export function SecondaryArticles({ secondaryArticles, tagColors }: MainArticlesProps) {
    return (
        <section className={styles.SecondaryArticlesContainer}>
            {secondaryArticles &&
                secondaryArticles.map((secondary) => (
                    <article className={styles.secondaryArticles}>
                        <div className={styles.separator} style={{ background: tagColors[secondary.tag] }}></div>
                        <h2 className={styles.secondaryTitle}>{secondary.title}</h2>
                    </article>
                ))
            }
        </section>
    )
}